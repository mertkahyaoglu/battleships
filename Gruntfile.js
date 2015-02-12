'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        browserify: {
          dist: {
            files: {
              'public/build/main.js': 'public/scripts/main.coffee',
              'src/build/gameManager.js': 'src/gameManager.coffee'
            },
            options: {
              transform: ['coffeeify']
            }
          }
        },

        uglify: {
          target: {
            files: {
              'public/build/main.min.js': 'public/build/main.js',
              'src/build/gameManager.min.js': 'src/build/gameManager.js'
            }
          }
        },

        watch: {
          express: {
            files:  [ 'lib/**/*.js', 'public/*', 'src/**/*.coffee', 'server.js' ],
            tasks:  [ 'build', 'express:dev' ],
            options: {
              spawn: false,
              livereload: 1337
            }
          }
        },

        clean: ['build/**/*'],

        jshint: {
          options: {
            jshintrc: '.jshintrc'
          },
          all: [
            'Gruntfile.js',
            'lib/**/*.js',
            'framework/**/*.js'
          ]
        },

        express: {
          dev: {
            options: {
              script: 'server.js'
            }
          }
        }

    });

    grunt.registerTask('build', [ 'clean', 'jshint', 'browserify']);
    grunt.registerTask('default', ['build', 'express:dev', 'watch']);
    grunt.registerTask('product', ['clean', 'jshint', 'browserify', 'uglify', 'watch', 'express']);

};
