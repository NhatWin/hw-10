const Manager = require("../lib/Manager");

test("create new Manager object with num property", () => {
  const manager = new Manager("Nhat", 1, "nat0933@gmail.com", 1);
  expect(manager.num).toBe(1);
});

test("create new Manager object with getRole method", () => {
  const manager = new Manager("Nhat", 1, "nat0933@gmail.com", 1);
  expect(manager.getRole()).toBe("Manager");
});

test("create new Intern object with getSchool method", () => {
  const manager = new Manager("Nhat", 1, "nat0933@gmail.com", 1);
  expect(manager.getNum()).toBe(1);
});
