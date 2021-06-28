const Employee = require('../team/Employee')

describe('Employee', () => {
	test("getRole returns role", () => {
	    expect(new Employee("Employee").getRole()).toBe("Employee");
	});	
    
    test("getName returns name", () => {
	    expect(new Employee("James Bond").getName()).toBe("James Bond");
	});
	
	test("getId returns id", () => {
	    expect(new Employee("James Bond", "007").getId()).toBe("007");
	});
	
	test("getEmail returns email address", () => {
	    expect(new Employee("James Bond", "007", "topsecret@gmail.com").getEmail()).toBe("topsecret@gmail.com");
	});
})
