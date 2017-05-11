# SeleniumToProtractor
This is a simple Nodejs module which converts selenium script to protractor script. 

INSTALLATION
------------
Download zip to your local.

To run this module, you need to first install the npm. 

With the npm version above 2.15.9, you can install this module by simply
run the InstallConverter.bat or npm install converter by command.

INTRODUCTION
-------------

To simply convert selenium script(*.json) to protractor script(*.spec), place your selenium scripts in the scripts folder;
then run Convert.bat(Windows) or Convert.sh(OS). The corresponding protractor scripts will be generated under the scripts folder
with the same file name of the selenium script but different suffix.

NOTICE
-----------
This module is created based on selenium-builder (https://github.com/SeleniumBuilder/se-builder). It can roughly translate simple
selenium scripts to protractor, but some of the commands like "waitFor" cannot be translate successfully, which will be translate into
"//TODO:..." that require testers to manually modify the script.
