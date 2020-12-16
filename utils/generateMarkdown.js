// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name} 

  ##  Description

  ${data.description}
  
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

  ## Table Of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.contribution}

  ## Test

    ${data.test}

  ## License

  ${data.license}

  ## Github Profile

  ${data.Github}

  ## Email 

  ${data.Email}
`;
}

module.exports = generateMarkdown;
