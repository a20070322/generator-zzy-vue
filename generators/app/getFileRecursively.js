const fs = require('fs');
const path = require('path');
const _filePath = path.resolve('./templates');
const outFilePath = path.resolve('./arr');
let filePathArr = []
getFileRecursively(_filePath)

function getFileRecursively(filePath){
    const files =fs.readdirSync(filePath)
    files.forEach(filename=>{
        const filedir = path.join(filePath, filename);
        const stats = fs.statSync(filedir)
        if(stats.isFile()){
            filedir.includes('.DS_Store')||filePathArr.push(filedir.replace(_filePath+'/',''))
        }
        if(stats.isDirectory()){
            getFileRecursively(filedir);
        }
    })
}
fs.writeFileSync(outFilePath,JSON.stringify(filePathArr))