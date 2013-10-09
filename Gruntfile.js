/*
 * grunt-logger
 * https://github.com//Users/urielster/logger
 *
 * Copyright (c) 2013 urielster
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    logger: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
      },
      custom_options: {
        options: {
          separator: ': ',
          punctuation: ' !!!'
        },
        files: {
          'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'logger', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};


grunt.initConfig({
  logger{
    prod: {
      option: {
        separator: ','
      },
      destination: "log/prod.log",
      logLine: "<%= pkg.name %>,<%= project_target %>,<%= now %>",
      logItems: {
        "date": grunt.template.today('yyyy-mm-dd hh:mm:ss'),
        "version": "456",
        "project": "<%= pkg.name %>",
        "environment": "<%= project_target %>"
      }
    },
    test: {
      destination: "log/test.log",
      logLine: "<%= pkg.name %>,<%= project_target %>,<%= now %>",
      options: {
      }
    }
  }
});