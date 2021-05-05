const inquirer = require("inquirer");

const generateMarkdown = (answers) => {
  return `
  # ${answers.applicationTitle}
${
  answers.applicationLicense !== "None"
    ? `![${answers.applicationLicense} license](https://img.shields.io/badge/license-${answers.applicationLicense}-green)`
    : ""
}
  
  ## Description of Application
  ${answers.applicationDescription}
  
  ## Table of Contents
  
  - [Application Title](#application-title)
    - [Description of Project](#description-of-application)
    - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
  ## Installation
  ${answers.installationInstructions}
  
  ## Usage
  ${answers.usageInstructions}
  
  ## License
  ${answers.applicationLicense}
  
  ## Contributing
  ${answers.contributionInstructions}
  
  ## Tests
  ${answers.testInformation}
  
  ## Questions
  
  - View my [Github](${answers.githubProfile}) profile to see more of my work.
  
  - For all questions and queries, email me at ${answers.emailAddress}`;
};

module.exports = generateMarkdown;

// fs write file pseudo code
// fsPromises.writeFile(file, data[, options])
