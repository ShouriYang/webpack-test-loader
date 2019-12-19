const path = require('path')
const fs = require('fs')
const srcRoot = './react-family-bucket/src';
const pageDir = path.resolve(srcRoot, 'page');
function getEntry() {
  let entryMap = {};
  fs.readdirSync(pageDir).forEach((pathname) => {
    let fullPathName = path.resolve(pageDir, pathname);
    fs.readdirSync(fullPathName).forEach((name) => {
      let stat = fs.statSync(fullPathName);
      let fileName = path.resolve(fullPathName, name);
      if (stat.isDirectory() && fs.existsSync(fileName)) {
        entryMap[pathname] = fileName;
      }
    })
  });
  return entryMap;
}
console.log(getEntry())