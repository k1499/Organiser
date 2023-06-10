let fs = require('fs');
const pathName = require('./index.js');
function createFolders(){
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
    fs.mkdir(pathName + '/Miscellaneous Files', (error) => {
        if(error){
            console.log('Miscellaneous files folder could not be created');
        }
    })
}

module.exports = createFolders;