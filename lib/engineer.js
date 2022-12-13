import employee from "./employee";

class manager extends employee {
  constructor(name, id, email, git) {
    super(name, id, email);
    this.git = git;
  }
}

module.exports = manager;
