const inquirer = require("inquirer");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = (license) => {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  `https://img.shields.io/badge/dynamic/json?url=<URL>&label=<LABEL>&query=<${answers.applicationLicense}>&color=<COLOR>&prefix=<PREFIX>&suffix=<SUFFIX>`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  return `
  # Application Title
  ${answers.applicationTitle}

  ![${answers.applicationLicense} license](https://img.shields.io/badge/license-MIT-green) 
  
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
  
  ## Contact
  
  - View my [Github](${answers.githubProfile}) profile to see more of my work.
  
  - For all questions ans queries, email me at ${answers.emailAddress}`;
};

module.exports = generateMarkdown;
