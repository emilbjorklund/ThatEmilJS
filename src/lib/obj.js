if (!Object.create) {
	(function () {
		"use strict";
		Object.create = function (o) {
			if (arguments.length > 1) {
				throw new Error('Object.create implementation only accepts the first parameter.');
			}
			var F = function () {};
			F.prototype = o;
			return new F();
		};
	}());
}