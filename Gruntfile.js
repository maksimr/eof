'use strict';

module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        nodeunit: {
            files: ['test/**/*_test.js'],
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib: {
                src: ['lib/**/*.js']
            },
            test: {
                src: ['test/**/*.js']
            },
        },
        'npm-contributors': {
            options: {
                commitMessage: 'chore: update contributors'
            }
        },
        bump: {
            options: {
                commitMessage: 'chore: release v%VERSION%',
                pushTo: 'origin'
            }
        },
        'auto-release': {
            options: {
                checkTravisBuild: true
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib: {
                files: '<%= jshint.lib.src %>',
                tasks: ['jshint:lib', 'nodeunit']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'nodeunit']
            }
        },
    });

    grunt.registerTask('release', 'Bump the version and publish to NPM.', function(type) {
        type = type || 'patch';

        grunt.task.run([
            'npm-contributors',
            'bump:' + type,
            'npm-publish'
        ]);
    });
    grunt.registerTask('test', ['nodeunit']);
    grunt.registerTask('default', ['jshint', 'nodeunit']);
};
