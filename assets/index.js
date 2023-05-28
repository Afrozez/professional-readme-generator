const fs = require('fs');

var inquirer = require('inquirer');
const { title } = require('process');
inquirer
  .prompt([
    /* Pass your questions in here */
   {
    type: 'input',
    name: 'title',
    message: 'What would you like your title to be named'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Give a description of the project.'
  },

  ])
  .then((answers) => {
   
    titleName = `# ${answers.title}`
    descriptionSubtitle = "## Description";
    description = `${answers.description}`
   

    readmeContent = `${titleName}\n\n${ descriptionSubtitle}\n` + '\n' + description + '\n';




    // Write the value of the title to a file
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('Title has been written to README.');
    });

    // Rest of your code
    console.log('Answers:', answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });










//fs.readFile('', 'utf8', (err, data)=>);
                // path, data we want, and then our callback funtion
//fs.writeFile('README.md', process.argv[2], (error)=>);

// path, data that we want, and then our callback function