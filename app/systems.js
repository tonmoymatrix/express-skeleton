const fs = require('fs');
var SystemConfig = {};
const appDir = './app';
// FOR LOADING CONTROLLER //
SystemConfig.controllers = {};
var filePath = appDir+'/controllers/';
fs.readdirSync(filePath).forEach(file => {
    if (fs.lstatSync(filePath+"/"+file).isDirectory() ) {
        SystemConfig.controllers[file] = {};
        fs.readdirSync(filePath+"/"+file).forEach(subfile => {
            SystemConfig.controllers[file][subfile] = require("."+filePath+"/"+file+"/"+subfile);	
        });
    }else {
		file = file.slice(0,-3);
		SystemConfig.controllers[file] = require("."+filePath+"/"+file);	
	}
});
// ************************************* //

//  FOR LOADING MODELS
filePath = appDir+'/models/';
SystemConfig.models = {};
fs.readdirSync(filePath).forEach(file => {
    
    file = file.slice(0,-3);
    SystemConfig.models[file] = require("."+filePath+"/"+file);	
});
// ************************************* //

//  FOR LOADING MODELS
filePath = appDir+'/callbacks/';
SystemConfig.callbacks = {};
fs.readdirSync(filePath).forEach(file => {
    file = file.slice(0,-3);
    SystemConfig.callbacks[file] = require("."+filePath+"/"+file);
});
// ************************************* //


module.exports = SystemConfig;