const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");

let leadManager = {};
const engineerTeam = [];
const internTeam = [];

let cards = "";

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
    saveLeader(manager);
    createTeam(manager);
  });
};

const createTeam = (data) => {
  if (data.teamMember === "engineer") {
    prompt(engineerQuestions).then((data) => {
      saveTeam(data);
      createTeam(data);
    });
  } else if (data.teamMember === "intern") {
    prompt(internQuestions).then((data) => {
      saveTeam(data);
      createTeam(data);
    });
  } else {
    engineerTeam.forEach(createEngineerCard);
    internTeam.forEach(createInternCard);
    writeToFile("team.html");
    console.log("All done!");
  }
};

const saveLeader = (manager) => {
  const lead = new Manager(
    manager.name,
    manager.id,
    manager.email,
    manager.num
  );
  leadManager = lead;
};

const saveTeam = (team) => {
  if (team.school === undefined) {
    const engineer = new Engineer(team.name, team.id, team.email, team.git);
    engineerTeam.push(engineer);
  } else {
    const intern = new Intern(team.name, team.id, team.email, team.school);
    internTeam.push(intern);
  }
};

const createLeadCard = (data) => {
  return `<div class="team">
  <h2>
    <img src="./Assets/manager.png" alt="manager icon" width="40" />${data.name}
  </h2>
  <p>ID: ${data.id}</p>
  <p>Email: ${data.email}</p>
  <p>Office #: ${data.num}</p>
</div>`;
};

const createEngineerCard = (data) => {
  cards += `<div class="team">
<h2>
  <img src="./Assets/engineer.png" alt="manager icon" width="40" />${data.name}
</h2>
<p>ID: ${data.id}</p>
<p>Email: ${data.email}</p>
<p>GitHub: ${data.git}</p>
</div>`;
};

const createInternCard = (data) => {
  cards += `<div class="team">
  <h2>
    <img src="./Assets/intern.png" alt="manager icon" width="40" />${data.name}
  </h2>
  <p>ID: ${data.id}</p>
  <p>Email: ${data.email}</p>
  <p>School: ${data.school}</p>
</div>`;
};

createTeamLead();

function writeToFile(fileName) {
  fs.writeFile(
    fileName,
    `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- CSS only -->
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@600&family=Rubik:wght@300&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/modern-normalize@1.1.0/modern-normalize.css"
      />
      <link rel="stylesheet" href="./src/style.css" />
      <title>HTML-CSS Practice</title>
    </head>
    <body>
      <header class="bg-warning text-dark p-5">
        <h1 class="text-center text-white">My Team</h1>
      </header>
      <section id="leader">
        ${createLeadCard(leadManager)}
      </section>
      <hr />
      <main>
        ${cards}
        <div class="team">
          <h2>
            <img src="./Assets/intern.png" alt="manager icon" width="40" />Nhat
          </h2>
          <p>ID: 2</p>
          <p>Email: nhat0933@gmail.com</p>
          <p>School: WashU</p>
        </div>
      </main>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `,
    (err) => (err ? console.error(err) : console.log("Success!"))
  );
}
