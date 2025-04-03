import EventEmitter from "node:events";

class server extends EventEmitter {
  constructor(limitRequest) {
    super();
    this.limitRequest = limitRequest;
  }
  count = 1;
  sendRequest(message) {
    if (this.count <= this.limitRequest) {
      this.emit("sendRequest", {
        port: 3000,
        status: 200,
        message: `send request n_O=${this.count }`,
      });
    } else {
      this.emit(
        "error",
        new Error(` faill to send request n_O=${
            this.count
          } because the server overload `)
        );
        this.removeAllListeners()
      }
    this.count++;
  }
}

const server1 = new server(5);
server1.once("sendRequest", (data) => {
  console.log("first requeste ", data);
});
server1.on("sendRequest", (data) => {
  console.log(data);
});
server1.on("error", (data) => {
  console.error(data);
});
setInterval(() => {
  server1.sendRequest();
}, 2000);
