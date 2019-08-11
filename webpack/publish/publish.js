let fs = require('fs')
let path = require('path')
const recursiveCopy = require('recursive-copy');

let publishConfig = require(path.resolve(__dirname+'/publishConfig.js'))
console.info('config', publishConfig)

let inDir = publishConfig.inDir
let outDir = publishConfig.outDir


let indexFile = path.join(inDir,'index.html')

// copy fix.css file if we need
// fs.copyFileSync(path.resolve('publish/fix.css'), inDir+'/static/fix.css')
// add that file
/*
let indexFileContents = fs.readFileSync(indexFile).toString()
let replacement = '<link href=/contest/static/fix.css rel=stylesheet type=text/css>'
if (indexFileContents.indexOf(replacement) === -1) {
  indexFileContents = indexFileContents.replace('</title>', '</title>'+replacement)
  console.info('Adding fix to index file')
  fs.writeFileSync(indexFile,indexFileContents)
}
*/





recursiveCopy(inDir, outDir, { overwrite: true }, function(error, results) {
  if (error) {
    console.error('Copy failed: ' + error);
  } else {
    console.info('Copied ' + results.length + ' files from '+inDir+' to '+outDir);
  }
});
