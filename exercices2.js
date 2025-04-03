// import {readFile} from 'node:fs'

// const configFiles = ['config.defaults.json','config.env.json','config.local.json']

// function loadConfig(files,index=0,configData={}){
//   if(index>= files.length){
//     console.log('final config:',configData)
//     return
//   }
//   readFile(files[index],(err,contents)=>{
//     if(err){
//       console.error('Error loading'+ files[index],err)
//     }else{
//       Object.assign(configData,JSON.parse(contents))
//     }
//     loadConfig(files,index+1,configData)
//   })
// }
// loadConfig(configFiles)

import fs from 'node:fs/promises'


async function loadConfig(files) {
    let configData = {};

    for (const file of files) {
        try {
            const data = await fs.readFile(file, {encoding:"utf8"});
            console.log(` Loaded ${file}`);
            configData = { ...configData, ...JSON.parse(data) };
        } catch (err) {
            console.error(` Failed to load ${file}: ${err.message}`);
        }
    }

    console.log('Final merged config:', configData);
    return configData;
}

const configFiles = ['config.defaults.json', 'config.env.json', 'config.local.json'];
loadConfig(configFiles);
