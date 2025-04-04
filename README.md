🇬 Description
This project is a recursive configuration loader in Node.js that reads multiple JSON files (e.g., config.defaults.json, config.env.json, config.local.json) and merges them into a final configuration object.

It is designed to:

Read config files asynchronously.

Keep going even if some files are missing or unreadable.

Log which files were successfully loaded or failed.

Let later files override earlier ones.

 Expected configuration files
config.defaults.json

config.env.json

config.local.json

🚀 Usage
node exercice2.js

Dependencies:
Node.js (v14+)
No external packages required
