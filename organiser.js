const pathName = require('./index.js');
let fs = require('fs');

fs.mkdir(pathName + '/word Files', (error) => {
    if(error){
        console.log('Word Files folder could not be created');
    }
})
fs.mkdir(pathName + '/Excel Files', (error) => {
    if(error){
        console.log('Excel files folder could not be created');
    }
})
fs.mkdir(pathName + '/Text Files', (error) => {
    if(error){
        console.log('Text files folder could not be created');
    }
})

fs.readdir(pathName, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
        
 }
);





