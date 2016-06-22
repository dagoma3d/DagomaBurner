#!/usr/bin/env node

var os = require('os');
var pkgjson = require('./package.json');
var path = require('path');
var sh = require('shelljs');

var appVersion = pkgjson.version
  , electronPackager = './node_modules/.bin/electron-packager'
  , electronVersion = '1.2.3'
  , icon = 'icon.icns';

var archs = ['ia32', 'x64'];

pack(os.platform(), os.arch());

function pack (plat, arch) {
  plat = plat.replace('--platform=', '');
  //var outputPath = path.join('../', 'build', 'releases', plat, arch);
  var outputPath = path.join('../', 'build'/*, 'releases', plat, arch*/);

  //sh.exec('./node_modules/.bin/rimraf ' + outputPath);

  var appName = pkgjson.name;
  if(plat == 'linux') appName = appName.toLowerCase();

  // there is no darwin ia32 electron
  if (plat === 'darwin' && arch === 'ia32') return;

  var cmds = [];

  var location = './';

  cmds.push(electronPackager + ' '+location+' ' + appName +
    ' --platform=' + plat +
    ' --arch=' + arch +
    ' --version=' + electronVersion +
    ' --app-version=' + appVersion +
    ' --icon=' + icon +
    ' --out=' + outputPath +
    ' --asar=true' +
    ' --overwrite' +
    ((plat == 'linux') ? '' : ' --prune')/* +
    /*' --ignore="electron-packager"'*/);

  for(var i in cmds){
    console.log(cmds[i]);
    if(process.platform == 'win32'){
      sh.exec(cmds[i], {silent:true});
    } else {
      sh.exec(cmds[i]);
    }
  }

}
