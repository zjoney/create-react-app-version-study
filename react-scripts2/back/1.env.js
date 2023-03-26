const path = require('path');
let dotenvFile = path.resolve(__dirname,'./.env');
require('dotenv-expand')(
    require('dotenv').config({
      path: dotenvFile,
    })
);
console.log(process.env.HOST);
console.log(process.env.PORT);
console.log(process.env.DB);
console.log(process.env.URL);