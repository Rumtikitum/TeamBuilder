const Employee = require('../team/Employee')

describe('Employee', () => {
	test("getRole returns role", () => {
	    expect(new Employee("Employee").getRole()).toBe("Employee");
	});	
    
    test("getName returns name", () => {
	    expect(new Employee("James Doe").getName()).toBe("James Doe");
	});
	
	test("getId returns id", () => {
	    expect(new Employee("James Doe", "007").getId()).toBe("007");
	});
	
	test("getEmail returns email address", () => {
	    expect(new Employee("James Doe", "007", "fakeemail@gmail.com").getEmail()).toBe("fakeemail@gmail.com");
	});
	

})
