const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");

const engineerTeam = [];
const internTeam = [];

const fs = require("fs");
const { request } = require("http");

const leaderQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the manager's employ ID?",
    validate: (answer) => {
      if (isNaN(answer)) {
        return "Pleas enter a number";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email?",
    validate: (answer) => {
      if (answer.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        return true;
      } else {
        return "Pleas enter an email";
      }
    },
  },
  {
    type: "input",
    name: "num",
    message: "What is the manager's office number?",
    validate: (answer) => {
      if (isNaN(answer)) {
        return "Pleas enter a number";
      } else {
        return true;
      }
    },
  },
  {
    type: "rawlist",
    name: "teamMember",
    message: "pick team role",
    choices: ["engineer", "intern", "completed team"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineer's employ ID?",
    validate: (answer) => {
      if (isNaN(answer)) {
        return "Pleas enter a number";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
    validate: (answer) => {
      if (answer.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        return true;
      } else {
        return "Pleas enter an email";
      }
    },
  },
  {
    type: "input",
    name: "git",
    message: "What is the engineer's GitHub?",
  },
  {
    type: "rawlist",
    name: "teamMember",
    message: "pick team role",
    choices: ["engineer", "intern", "completed team"],
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's employ ID?",
    validate: (answer) => {
      if (isNaN(answer)) {
        return "Pleas enter a number";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email?",
    validate: (answer) => {
      if (answer.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        return true;
      } else {
        return "Pleas enter an email";
      }
    },
  },
  {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
  },
  {
    type: "rawlist",
    name: "teamMember",
    message: "pick team role",
    choices: ["engineer", "intern", "completed team"],
  },
];

const createTeamLead = () => {
  prompt(leaderQuestions).then((manager) => {
    createLeadCard(manager);
    createTeam(manager);
  });
};

const createTeam = (data) => {
  if (data.teamMember === "engineer") {
    prompt(engineerQuestions).then((data) => {
      creatTeamCard(data);
      createTeam(data);
    });
  } else if (data.teamMember === "intern") {
    prompt(internQuestions).then((data) => {
      createTeam(data);
      creatTeamCard(data);
    });
  } else {
    console.log("All done!");
  }
};

const createLeadCard = (manager) => {
  const lead = new Manager(
    manager.name,
    manager.id,
    manager.email,
    manager.num
  );
};

const creatTeamCard = (team) => {
  if (team.school === undefined) {
    const engineer = new Engineer(team.name, team.id, team.email, team.git);
    engineerTeam.push(engineer);
  } else {
    const intern = new Intern(team.name, team.id, team.email, team.school);
    internTeam.push(intern);
  }
};

createTeamLead();

// function writeToFile(fileName, data) {
//   generateMarkdown;
//   const info = generateMarkdown(data);
//   fs.writeFile(fileName, ``, (err) =>
//     err ? console.error(err) : console.log("Success!")
//   );
// }
