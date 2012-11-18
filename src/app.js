window.App = (function (window, undefined) {
	"use strict";

	var namespace = function (path) {
		var parts, i, len, object;

		object = this;

		if (typeof path !== 'string') {
			throw new TypeError('namespace function expects a single string argument.');
		}
		parts = path.split('.');
		for (i=0, len=parts.length; i<len; i++) {
			if (typeof object[parts[i] == 'undefined']) {
				object[parts[i]] = {};
			}
			object = object[parts[i]];
		}
		return object;
	};

	return {
		namespace: namespace
	};
}(window));