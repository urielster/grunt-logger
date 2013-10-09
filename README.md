# grunt-logger

> Logging data for each Grunt deployment in files

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-logger --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-logger');
```

## The "logger" task

### Overview
In your project's Gruntfile, add a section named `logger` to the data object passed into `grunt.initConfig()`.
This task will create/append the log file according to log items defined in the logItems section.


```js
grunt.initConfig({
  logger{
    prod: {
      option: {
        separator: ','
      },
      destination: "log/prod.log",
      logItems: {
        "date": grunt.template.today('yyyy-mm-dd hh:mm:ss'),
        "version": "456",
        "project": "<%= pkg.name %>",
        "environment": "<%= pkg.env %>"
      }
    },
    test: {
      destination: "log/test.log",
      options: {
        separator: ','
      },
      logItems: {
        "date": grunt.template.today('yyyy-mm-dd hh:mm:ss'),
        "project": "<%= pkg.name %>",
        "environment": "<%= pkg.env %>"
      }
    }
  }
});
```

### destination
Type: `String`

Mandatory: A string that represent the path and file, where the log should be written.
if no file exists a new file will be created.
example: 'log/myLog.log'

### logItems
Type: `Object`

Mandatory: Object that holds the items to be added to the log line. only the values of the properties will be added to the log line

so if i want to add a lines like this:
1/1/2000 12:00, project1, test
1/1/2000 12:01, project2, test

so the logItems will look like:
logItems:{
  'date': grunt.template.today('mm-dd-yyyy hh:mm'),
  'project': '<%= pkg.name %>',
  'environment': 'test'
}

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that separate between log items.

### Usage Examples

See the major example above.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.5 Adding tests