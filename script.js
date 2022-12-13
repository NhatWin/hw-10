const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

const leaderQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the manager's name?",
  },
  {
    type: "number",
    name: "managerId",
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
    name: "managerEmail",
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
    type: "number",
    name: "managerNum",
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
    name: "engineerName",
    message: "What is the engineer's name?",
  },
  {
    type: "number",
    name: "engineerId",
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
    name: "engineerEmail",
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
    name: "engineerGit",
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
    name: "internName",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "internId",
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
    name: "internEmail",
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
    name: "internSchool",
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
      createTeam(data);
    });
  } else if (data.teamMember === "intern") {
    prompt(internQuestions).then((data) => {
      createTeam(data);
    });
  } else {
    console.log("All done!");
  }
};

const createLeadCard = (manager) => {};

createTeamLead();
