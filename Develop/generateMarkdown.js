// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license === 'Creative Commons') {
        return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    } else if (license === 'Apache 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else {
        return '';
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'None' || license === '') {
        return '';
    }
    return `Liscenced under ${renderLicenseBadge(license)}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
Run the Following command to install:
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Send your questions to: ${data.email}

### &copy; ${new Date().getFullYear()} by [${data.title}](https://github.com/${data.title})
`;

}

module.exports = generateMarkdown;