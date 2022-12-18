const Intern = require("../lib/Intern");

test("create new Intern object with school property", () => {
  const intern = new Intern("Nhat", 1, "nat0933@gmail.com", "WashU");
  expect(intern.school).toBe("WashU");
});

test("create new Intern object with getRole method", () => {
  const intern = new Intern("Nhat", 1, "nat0933@gmail.com", "WashU");
  expect(intern.getRole()).toBe("Intern");
});

test("create new Intern object with getSchool method", () => {
  const intern = new Intern("Nhat", 1, "nat0933@gmail.com", "WashU");
  expect(intern.getSchool()).toBe("WashU");
});
