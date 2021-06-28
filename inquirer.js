//Calling all require exported mods!!
const Manager = require('./team/Manager');
const Engineer = require('./team/Engineer');
const Intern = require('./team/Intern');
const inquirer = require('inquirer');
const createHtml = require('./write/createHtml');
const fs = require('fs');

//team array to push new members
let team = [];

//managers are required so they are the initiating line...
const init = () => {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Manager's name?",
      },
      {
        type: 'input',
        message: "Manager's ID #?",
        name: 'id',
        
      },
      {
        type: 'input',
        message: "Manager's email?",
        name: 'email',
      },
  
      {
          type: 'input',
          message: "Manager's office location?",
          name: 'office',
        },
    ])
    .then((data) => {
      let manager = new Manager(data.name, data.id, data.email, data.office);
      team.push(manager);
      addTeamMember();
      
  });
}

//prompts user to decided whether they wish to add more members aside from manager
const addTeamMember = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Will you be adding more team members?',
                name: 'member',
                choices: ['Intern', 'Engineer', "My team is complete"],
            },
        ])
        .then((data) => {
            if(data.member === 'Engineer') {
                createEngineer();
            } else if (data.member === 'Intern') {
                createIntern();
            } else {
                generateCrew();
            }
        });
};

//intern chosen
const createIntern = () => {
    inquirer
        .prompt([
            {
            type: 'input',
            name: 'name',
            message: "Intern's name?",
            },

            {
            type: 'input',
            message: "Intern's ID #?",
            name: 'id',
            
            },
            {
            type: 'input',
            message: "Intern's email?",
            name: 'email',
            },

            {
                type: 'input',
                message: "Intern's university?",
                name: 'school',
            },
        ])
        //create team member
        .then((data) => {
            let intern = new Intern(data.name, data.id, data.email, data.school);
            team.push(intern);
            newMember();
            
        });
}

//engineer chosen
const createEngineer = () => {
    inquirer
        .prompt([
            {
            type: 'input',
            name: 'name',
            message: "Engineer's name?",
            },
            {
            type: 'input',
            message: "Engineer's ID #?",
            name: 'id',       
            },
            {
            type: 'input',
            message: "Engineer's email?",
            name: 'email',     
            },

            {
                type: 'input',
                message: "Engineer's GitHub username?",
                name: 'github',
            },
        ])
        //creates team member
        .then((data) => {
            let engineer = new Engineer(data.name, data.id, data.email, data.github);
            team.push(engineer);
            newMember();
            
        });
}

//secondary question to include more members after first member aside from manager added.
const newMember = () => {
    inquirer
        .prompt([
            {
            type: 'list',
            name: 'more',
            message: "More team members?",
            choices: ['Yes', 'No'],
            }
            
        ])
        .then((data) => {
            if(data.more === 'Yes') {
                addTeamMember();
            } else {
                generateCrew();
            }
            
        });
}

 //Begins execution of the prompt process
init();

//Takes all classes pushed into the team array, and passes that into the createCard function to write the html file
const generateCrew = () => {
  let html =  createHtml(team);
  fs.writeFileSync('index.html', html, function(err) {

  })
 };