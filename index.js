// Requiring packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

// Validates user input, if the user doesn't type any answer in,
// they receive the following prompt
const validateInput = (userInput) => {
  if (userInput === "") {
    return "please type your answer before proceeding";
  } else {
    return true;
  }
};

// Questions for the user input
const questions = [
  {
    type: "input",
    message: "What is your application title?",
    name: "applicationTitle",
    validate: validateInput,
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
    validate: validateInput,
  },
  {
    type: "input",
    message:
      "What installation instructions would you give for your application?",
    name: "installationInstructions",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What usage instructions would you give for your application?",
    name: "usageInstructions",
    validate: validateInput,
  },
  {
    type: "input",
    message:
      "What contribution instructions can you give for your application?",
    name: "contributionInstructions",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Can you give any information on tests for your application?",
    name: "testInformation",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Can you enter your GitHub profile URL?",
    name: "githubProfile",
    validate: validateInput,
  },
  {
    type: "input",
    message:
      "Can you enter your email address for anyone wishing to get in touch?",
    name: "emailAddress",
    validate: validateInput,
  },
];

// Function writes to the generated_readme.md file
const writeToFile = (data) => {
  const callback = (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("generated readme has been created");
    }
  };

  fs.writeFile("generated_readme.md", data, callback);
};

// Function initialises app, listen to answers from user input
const init = async () => {
  const answers = await inquirer.prompt(questions);
  // The markdown is generated from the user input
  const markdown = generateMarkdown(answers);
  writeToFile(markdown);
};

// Function call to initialize app
init();
