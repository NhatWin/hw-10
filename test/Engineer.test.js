const Engineer = require("../lib/Engineer");

test("create new Engineer object with git property", () => {
  const engineer = new Engineer("Nhat", 1, "nat0933@gmail.com", "nhatwin");
  expect(engineer.git).toBe("nhatwin");
});

test("create new Engineer object with getRole method", () => {
  const engineer = new Engineer("Nhat", 1, "nat0933@gmail.com", "nhatwin");
  expect(engineer.getRole()).toBe("Engineer");
});

test("create new Engineer object with getGit method", () => {
  const engineer = new Engineer("Nhat", 1, "nat0933@gmail.com", "nhatwin");
  expect(engineer.getGit()).toBe("nhatwin");
});
