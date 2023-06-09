const { program } = require('commander');

let pathName;

program
  .name('file organiser')
  .description('CLI to organise the files');

program.command('spec-path')
  .description('Starting up CLI tool')
  .argument('<string>', 'Path to be organised')
  .action((filePath, options) => {
    console.log(typeof(filePath));
    pathName = filePath;    
});

program.parse();

module.exports = pathName;