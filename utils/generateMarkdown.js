// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name} 
  
  [![Generic badge](https://img.shields.io/badge/<License>-<${data.license}>-<COLOR>.svg)](https://shields.io/)

  ##  Description
  
  ${data.description}


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

  for any questions or inquiries  please feel free to message me on Github at: https://github.com/${data.Github}

  or you can send me an E-mail :  ${data.Email}

 

 
`;
}

module.exports = generateMarkdown;
