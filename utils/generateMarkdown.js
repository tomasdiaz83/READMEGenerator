// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = "test";
    return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let link = "test";
    return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let section = "test";
    return section
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, description, install, usage, contribution, testing, gitHub, email, license }) => 
    `# ${title} #${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents

- ### [Installation](#Installation)
- ### [Usage](#Usage)
- ### [License](#License)
- ### [Guidelines for Contributing](#Guidelines-for-Contributing)
- ### [Guidelines for Testing](#Guidelines-for-Testing)
- ### [Further Questions](#Further-Questions)

## Installation
${install}

## Usage
${usage}

## License
${renderLicenseSection(license)}

For more information: ${renderLicenseLink(license)}

## Guidelines for Contributing
${contribution}

## Guidelines for Testing
${testing}

## Further Questions
Please contact me with any questions:
- GitHub: ${gitHub}
- Email: ${email}`;

export default {
    generateMarkdown
}