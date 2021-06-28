const Engineer = require('../team/Engineer')
describe('Engineer', () => {
	test("getGit returns github", () => {
	    expect(new Engineer("Github").getName()).toBe("Github");
	});
	
	test("getRole returns role", () => {
	    expect(new Engineer("Employee").getRole()).toBe("Engineer");
	});
})
