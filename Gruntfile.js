//Gruntfile.js
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            options: {
                // sourceMap: true
            },
            dist: {
                files: {
                    'style.css': 'style.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);

};