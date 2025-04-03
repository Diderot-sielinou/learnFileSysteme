import {readFile} from 'node:fs'

const configFiles = ['config.defaults.json','config.env.json','config.local.json']

function loadConfig(files,index=0,configData={}){
  if(index>= files.length){
    console.log('final config:',configData)
    return
  }
  readFile(files[index],(err,contents)=>{
    if(err){
      console.error('Error loading'+ files[index],err)
    }else{
      Object.assign(configData,JSON.parse(contents))
    }
    loadConfig(files,index+1,configData)
  })
}
loadConfig(configFiles)

function loadConfigMessage(files,index=0,configData={}){
  if(index>= files.length){
    console.log('final config:',configData)
    return
  }
  readFile(files[index],(err,contents)=>{
    if(err){
      console.error('Error loading'+ files[index],err)
    }else{
      Object.assign(configData,JSON.parse(contents))
    }
    loadConfig(files,index+1,configData)
  })
}