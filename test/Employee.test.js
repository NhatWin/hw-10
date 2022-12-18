const Employee = require("../lib/Employee");

test("create new Employee object with name property", () => {
  const employee = new Employee("Nhat", 1, "nat0933@gmail.com");
  expect(employee.name).toBe("Nhat");
});

test("create new Employee object with id property", () => {
  const employee = new Employee("Nhat", 1, "nat0933@gmail.com");
  expect(employee.id).toBe(1);
});

test("create new Employee object with email property", () => {
  const employee = new Employee("Nhat", 1, "nat0933@gmail.com");
  expect(employee.email).toBe("nat0933@gmail.com");
});

test("create new Employee object with getRole method", () => {
  const employee = new Employee("Nhat", 1, "nat0933@gmail.com");
  expect(employee.getRole()).toBe("Employee");
});

test("create new Employee object with getName method", () => {
  const employee = new Employee("Nhat", 1, "nat0933@gmail.com");
  expect(employee.getName()).toBe("Nhat");
});

test("create new Employee object with getId method", () => {
  const employee = new Employee("Nhat", 1, "nat0933@gmail.com");
  expect(employee.getId()).toBe(1);
});

test("create new Employee object with getEmail method", () => {
  const employee = new Employee("Nhat", 1, "nat0933@gmail.com");
  expect(employee.getEmail()).toBe("nat0933@gmail.com");
});
