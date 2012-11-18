var config = module.exports;

config["LabelManagerTests"] = {
    env: "browser",        // or "node"
    rootPath: "../",
    sources: [
		'src/lib/*.js',
        'src/app.js'
    ],
    tests: [
        "test/*-test.js"
    ]
};