module.exports = {
	initialize: function(){
		builder = {};
		builder.version = "3.1.2";

		require("./builder/utils.js");
		require("./builder/i18n/translate.js");
		require("./builder/io.js");
		require("./builder/script.js");
		require("./builder/selenium2/selenium2.js");
		require("./builder/selenium2/io/io.js");
		require("./builder/selenium2/io/formats/node-protractor.js");
		require("./builder/locator.js");
	},

	translate: function(testCaseFile, targetFile, userParams){
		console.log('Converting : '+ testCaseFile);
		var fs = require('fs');
		var path = require('path');
		var testCase = path.basename(testCaseFile);
		//get content from file
		var scriptText = fs.readFileSync(testCaseFile,'utf8');
		//single test case
		var io = builder.selenium2.io;
		var formatter = io.formats[0];
		var script = builder.selenium2.io.parseScript(scriptText, testCase);
		var result = formatter.format(script, testCase, userParams);
		fs.writeFileSync(targetFile, result);

		console.log('Saved File: ' + targetFile);
	}
}