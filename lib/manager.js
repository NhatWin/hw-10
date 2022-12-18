const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, num) {
    super(name, id, email);
    this.num = num;
  }
  getRole() {
    return this.constructor.name;
  }

  getNum() {
    return this.num;
  }
}

module.exports = Manager;
