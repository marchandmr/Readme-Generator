// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name} 

  ##  Description

  ${data.description}
 
  ![GitHub](https://img.shields.io/github/license/${data.Github}/${data.name})

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

## Questions

  for any questions or inquiries  please feel free to message me on Github at: ${data.Github}

  or you can send me an E-mail :  ${data.Email}

 

 
`;
}

module.exports = generateMarkdown;
