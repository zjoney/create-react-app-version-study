#!/usr/bin/env node

//开启子进程
const spawn = require('cross-spawn');
//获取命令行参数 ['build']
const args = process.argv.slice(2);
const script = args[0];//build
//以同步方式开始子进程执行scripts下面的 build.js脚本
spawn.sync(
    process.execPath,//node的可执行文件路径
    [require.resolve('../scripts/'+script)],
    {stdio:'inherit'}//父进程和子进程共享输入输出 
);
