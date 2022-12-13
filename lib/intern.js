import employee from "./employee";

class manager extends employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
}

module.exports = manager;
