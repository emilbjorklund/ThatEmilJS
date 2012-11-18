// Expose describe and it functions globally
buster.spec.expose();

describe("The object.create polyfill", function () {
	it("should allow a created Sphere-object inherit from a Circle-object", function () {
		var circle = {
			radius: 6,
			area: function () {
				return this.radius * this.radius * Math.PI;
			}
		};
		var sphere = Object.create(circle);
		sphere.area = function () {
			return 4 * circle.area.call(this);
		};
		expect(452).toEqual(Math.round(sphere.area()));
	});
});