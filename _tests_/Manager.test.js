const Manager = require('../team/Manager')
describe('Intern', () => {
    test("getOfficeNumber returns officeNumber", () => {
        expect(new Manager("007").getName()).toBe("007");
    });

    it("getRole returns role", () => {
        expect(new Manager("Employee").getRole()).toBe("Manager");
    });
})
