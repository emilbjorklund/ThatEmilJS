// Expose describe and it functions globally
buster.spec.expose();

describe("The namespace method", function () {
	var app = window.App;

	function tearDown() {
		delete app.nstest;
	}

	it("should be available as a method on the 'app'-object", function () {
		expect(app.namespace).toBeFunction();
	});
	it("should add the name from the path argument as an object on the root", function () {
		app.namespace('nstest');
		expect(app.nstest).toBeObject();
	});
	it("should not overwrite existing objects", function () {
		app.nstest = { nested: {} };
		var result = app.namespace("nstest.nested");
		expect(app.nstest.nested).toBe(result);
	});
	
});