//Maya Li Bauer
//January 21, 2025
//generateMarkdown.js

//License Dictionary
//https://docs.github.com/en/rest/licenses/licenses?apiVersion=2022-11-28

//A dictionary of licenses taken from the link above to get the spdx_id and the badge
const licensesDictionary = [
  {
    "key": "mit",
    "name": "MIT License",
    "spdx_id": "MIT",
    "url": "https://api.github.com/licenses/mit",
    "node_id": "MDc6TGljZW5zZW1pdA==",
    "badge": "https://img.shields.io/badge/License-MIT-yellow.svg"
  },
  {
    "key": "lgpl-3.0",
    "name": "GNU Lesser General Public License v3.0",
    "spdx_id": "LGPL-3.0",
    "url": "https://api.github.com/licenses/lgpl-3.0",
    "node_id": "MDc6TGljZW5zZW1pdA==",
    "badge": "https://img.shields.io/badge/License-LGPL_v3-blue.svg"
  },
  {
    "key": "mpl-2.0",
    "name": "Mozilla Public License 2.0",
    "spdx_id": "MPL-2.0",
    "url": "https://api.github.com/licenses/mpl-2.0",
    "node_id": "MDc6TGljZW5zZW1pdA==",
    "badge": "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
  },
  {
    "key": "agpl-3.0",
    "name": "GNU Affero General Public License v3.0",
    "spdx_id": "AGPL-3.0",
    "url": "https://api.github.com/licenses/agpl-3.0",
    "node_id": "MDc6TGljZW5zZW1pdA==",
    "badge": "https://img.shields.io/badge/License-AGPL_v3-blue.svg"
  },
  {
    "key": "unlicense",
    "name": "The Unlicense",
    "spdx_id": "Unlicense",
    "url": "https://api.github.com/licenses/unlicense",
    "node_id": "MDc6TGljZW5zZW1pdA==",
    "badge": "https://img.shields.io/badge/license-Unlicense-blue.svg"
  },
  {
    "key": "apache-2.0",
    "name": "Apache License 2.0",
    "spdx_id": "Apache-2.0",
    "url": "https://api.github.com/licenses/apache-2.0",
    "node_id": "MDc6TGljZW5zZW1pdA==",
    "badge":"https://img.shields.io/badge/License-Apache_2.0-blue.svg"
  },
  {
    "key": "gpl-3.0",
    "name": "GNU General Public License v3.0",
    "spdx_id": "GPL-3.0",
    "url": "https://api.github.com/licenses/gpl-3.0",
    "node_id": "MDc6TGljZW5zZW1pdA==",
    "badge": "https://img.shields.io/badge/License-GPLv3-blue.svg" 
  }
]


// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If there is no license, return an empty string
  if(license === 'None' || license === 'none' || !license) {
    return ('');
  }
    //gets the chosen license in the dictionary and makes it lower case
    const chosenLicense = licensesDictionary.find(item => item.key === license.toLowerCase());
    if (chosenLicense) {
      //returns the license badge
      return `![License Badge](${chosenLicense.badge})`;
    } else {
      return '';
    }
  }



// TODO: Create a function that returns the license link

function renderLicenseLink(license) {
  // If there is no license, return an empty string
  if(license === 'None' || license === 'none' || !license) {
    return ('');
  }
  //gets the chosen license in the dictionary and makes it lower case
  const chosenLicense = licensesDictionary.find(item => item.key === license.toLowerCase());
  if (chosenLicense) {
    //returns the license link
    return `[License: ${chosenLicense.name}](${chosenLicense.url})`;
  } else {
    return '';
  }
}



// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {
  // If there is no license, return an empty string
  if(license === 'None' || license === 'none' || !license) {
    return ('');
  }
  //gets the chosen license in the dictionary and makes it lower case
  const chosenLicense = licensesDictionary.find(item => item.key === license.toLowerCase());
  if (chosenLicense) {
    //returns the formatted license sentence
    return `This project is licensed under the ${chosenLicense.name} (${chosenLicense.spdx_id}) license.`;
  } else {
    return '';
  }
}


//formatting the table of contents
const formatSectionTitle = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')       
    .replace(/[^\w\-]+/g, '');
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);


  //makes the table of contents in to links by splitting them up by the users inputted commas 
  const links = data.tableOfContents.split(',').map(item => {
    const formattedSection = formatSectionTitle(item.trim()); 
    return `- [${item.trim()}](#${formattedSection})`; //formats the outputted section to make it so it is linked in the table of contents
  }).join('\n');


  //Everything below is the format of the outputted README.md
  return `# ${data.title}     
  
    \n${licenseBadge}

\n## Description
    \n${data.projectDescription}


  \n## Table of Contents
    \n${links}
        
    \n## Installation
    \n${data.installProject}

    \n## Usage
    \n${data.usage}
        
    \n## Credits
    \n${data.collaborators}

    \n## License
    \n${licenseSection}
    \n${licenseBadge}
    \n${licenseLink}

    \n## Guidelines/Contributing 
    \n${data.guidelines}

    \n## Tests
    \n${data.tests}

    \n## Questions? 

    \nIf you have questions, you can reach me through my email or github:
    \n${data.email}
    \n${data.github}
    




`;
}

export default generateMarkdown;
