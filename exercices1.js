import EventEmitter from "node:events";

class Overload extends Error {
  constructor(name=""){
    super(name+" warnin")
    this.code= "0001"
  }

  get name(){
    return `Overload[${this.code}]`
  }

}

class server extends EventEmitter {
  constructor(threshold={cpu:80,memory:80}) {
    super();
    this.threshold = threshold;
  }
  count = 1;
  sendRequest() {
    const cpuUsage = Math.random() * 100; // Simulation
    const memoryUsage = Math.random() * 100; // Simulation

    if (cpuUsage < this.threshold.cpu || memoryUsage < this.threshold.memory) {
      this.emit("sendRequest", `CPU: ${cpuUsage.toFixed(2)}%, Memory: ${memoryUsage.toFixed(2)}%`);
    } else {
      this.emit(
        "error",
        new Overload(`⚠️ Overload detected! CPU: ${cpuUsage.toFixed(2)}%, Memory: ${memoryUsage.toFixed(2)}%`)
        );
        process.exit(1);
      }
    this.count++;
  }
}

const server1 = new server();
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
