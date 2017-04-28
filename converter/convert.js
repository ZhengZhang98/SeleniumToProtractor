main();

function main(){
	var process = require('process');
	var fs = require('fs');
	var path = require('path');
	var converter = require('converter');
	var scriptFolders = process.argv[2];
	var userParams = {};

	const scriptFileExt = ".json";
	const specFileExt = ".spec";

	var filter = process.argv[3];

	console.info("Convert files under: " + scriptFolders);

	function convertFolder(folders, filter){
		var testCaseFiles = {};
		var fs = require('fs');
		var path = require('path');
		for(var i in folders){
			var folder = folders[i];
			console.info("Scan files under folder: " + folder);
			var Files = fs.readdirSync(folder);
			for (var i in Files){
				var file = Files[i];
				var baseName = path.basename(file);
				if((filter && baseName === filter)||(!filter && path.extname(file)===scriptFileExt)){
					var scriptFile = path.join(folder, file);
					var targetFile = replaceFileExt(scriptFile, specFileExt);
					converter.translate(scriptFile, targetFile, userParams, folder);
				}
			}
		}
	}
	converter.initialize();
	convertFolder(scriptFolders.split(','), filter);

	function replaceFileExt(scriptFile, fileExt){
		var extName = path.extname(scriptFile);
		var extIndex = scriptFile.lastIndexOf(extName);
		return scriptFile.substring(0, extIndex) + fileExt;
	}
}