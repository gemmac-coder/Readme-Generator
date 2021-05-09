# Readme_Generator

## License

[MITLicense] (https://img.shields.io/badge/licenses/MIT)(https://opensource.org/licenses/)

## Description

I was tasked to create a professional README generator that would allow developers to answer a series of questions about their application. Their answers to the questions would then be returned in a README markdown, ensuring that they had a comprehensive README file for their application, which conformed to best practices.

## Getting Started

i.e. instructions for how to clone the repo

## Installation

1. Firstly fork and clone this repo to your personal GitHub. Follow [these](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) instructions to fork and clone this repo.

2. Secondly, open the cloned repo in [VS Code](https://code.visualstudio.com/download).

3. Open the integrated terminal by right clicking on the index.js file in VS Code and clicking 'Open in Integrated Terminal'.

4. Finally type 'npm install inquirer' into your integrated terminal to install the inquirer package. The inquirer package is used to generate the series of questions that will allow you to input answers about your application. Your inputted answers are used to generate your README.

## Usage

Once you are ready to input the content to generate your README, open the index.js file in the integrated terminal and type npm run start. You will then be presented with a series of questions about your application. Please try and answer all questions and do not simply hit return to skip to the next question. Each question has an input validation on it and therefore it will not accept empty strings.

If the question is not relevant, please type 'not applicable' to proceed to the next question.

Once you have answered all questions, you will see that your new README has been generated in your VS Code folder under the file name 'generated_readme.md'.

## Tests

No applicable tests.

## Link to Video Recording
