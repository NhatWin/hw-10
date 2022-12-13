import employee from "./employee";

class manager extends employee {
  constructor(name, id, email, num) {
    super(name, id, email);
    this.num = num;
  }
}

module.exports = manager;
