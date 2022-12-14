const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, num) {
    super(name, id, email);
    this.num = num;
  }
}

module.exports = Manager;
