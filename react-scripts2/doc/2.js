let fs = require('fs');
let path = require('path');
const appDirectory = fs.realpathSync(process.cwd());
//NODE_PATH 是 是一个用路径分隔符分开的路径目录的集合
//用来告诉 我们去哪里查找模块
console.log(path.delimiter);//window; mac :
process.env.NODE_PATH=[
    './a',
    path.resolve(appDirectory,'b'),
    './c'
].join(path.delimiter);
console.log(process.env.NODE_PATH);
process.env.NODE_PATH = (process.env.NODE_PATH || '')
  .split(path.delimiter)
  .filter(folder => folder && !path.isAbsolute(folder))
  .map(folder => path.resolve(appDirectory, folder))
  .join(path.delimiter);
  console.log(process.env.NODE_PATH);