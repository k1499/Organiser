const pathName = require('./organiser.js');
const createFolders = require('./createFolder.js');
let fs = require('fs');

createFolders();

fs.readdir(pathName, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    files.forEach((file) => {
        if(file.indexOf('.') != -1){
          let fileType = file.substring(file.indexOf('.'),file.length);
          let sourceFilePath = pathName.concat('\\',file);
          let destinationFilePath
          if(fileType == '.txt'){
            destinationFilePath = pathName.concat('\\Text Files\\',file);
          }
          else if(fileType == '.docx'){
            destinationFilePath = pathName.concat('\\Word Files\\',file);
          }
          else if(fileType == '.xlsx'){
            destinationFilePath = pathName.concat('\\Excel Files\\',file);
          }
          else{
            destinationFilePath = pathName.concat('\\Miscellaneous files\\',file);
          }
          console.log(sourceFilePath , destinationFilePath);
          fs.rename(sourceFilePath, destinationFilePath, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            
            console.log('File moved successfully!');
          });
        }
    })
  }
);





