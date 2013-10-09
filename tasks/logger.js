/*
 * grunt-logger
 * https://github.com//Users/urielster/logger
 *
 * Copyright (c) 2013 urielster
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('logger', 'Logging data for each Grunt deployment in files', function() {
    var options = this.options({
      separator: ','
    });
    var data = this.data,
      _ = grunt.util._,
      path = require('path'),
      dest =  data.destination,
      logLineArr = [],
      logLine = "",
      logItems = data.logItems,
      sep = grunt.util.linefeed,
      logData = "";
    //Check file existence

    _.each(logItems,function(value,key){
      logLineArr.push(value);
      logLineArr.push(options.separator);
    });
    logLine = logLineArr.join('');

    if (!grunt.file.exists(dest)) {
      grunt.log.warn('Source file "' + dest + '" not found. it will be created now');
    }  else {
      logData = grunt.file.read(dest);
    }
    grunt.file.write(dest, logData + logLine + sep );
    grunt.log.writeln('File "' + dest + '" updated.');
  });

};
