const pathName = require('./index.js');
let fs = require('fs');

fs.readdir(pathName, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(files);    
 }
);





