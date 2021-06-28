const Intern = require('../team/Intern')
describe('Intern', () => {
    test("getSchool returns school", () => {
        expect(new Intern("University of California Riverside").getName()).toBe("University of California Riverside");
    });

	test("getRole returns role", () => {
	    expect(new Intern("Employee").getRole()).toBe("Intern");
	});
})
