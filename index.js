// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your application title?",
    name: "applicationTitle",
  },
  {
    type: "list",
    message: "What license does your application have?",
    name: "applicationLicense",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    message: "How would you describe what your application is about?",
    name: "applicationDescription",
  },
  {
    type: "input",
    message:
      "What installation instructions would you give for your application?",
    name: "installationInstructions",
  },
  {
    type: "input",
    message: "What usage instructions would you give for your application?",
    name: "usageInstructions",
  },
  {
    type: "input",
    message:
      "What contribution instructions can you give for your application?",
    name: "contributionInstructions",
  },
  {
    type: "input",
    message: "Can you give any information on tests for your application?",
    name: "testInformation",
  },
  {
    type: "input",
    message: "Can you enter your GitHub profile URL?",
    name: "githubProfile",
  },
  {
    type: "input",
    message:
      "Can you enter your email address for anyone wishing to get in touch?",
    name: "emailAddress",
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  generateMarkdown(answers);
};

// TODO: Create a function to initialize app
const init = async () => {
  console.log("started");

  const answers = await inquirer.prompt(questions);

  console.log(answers);
};

// Function call to initialize app
init();
