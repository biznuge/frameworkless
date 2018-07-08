

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        /*concat: {
            "options": { "separator": ";" },
            "build": {
                "src": ["js/file1.js", "js/file2.js"],
                "dest": "js/app.js"
            }
        }*/

        less: {
            development: {
                /*options: {
                    paths: ['assets/css']
                },*/
                files: {
                    'target/main.css': 'source/frameworkless.less'
                }
            },
            /*production: {
                options: {
                    paths: ['assets/css'],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                        new (require('less-plugin-clean-css'))(cleanCssOptions)
                    ],
                    modifyVars: {
                        imgPath: '"http://mycdn.com/path/to/images"',
                        bgColor: 'red'
                    }
                },
                files: {
                    'path/to/result.css': 'path/to/source.less'
                }
            }*/
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'target',
                    src: ['*.css', '!*.min.css'],
                    dest: 'target',
                    ext: '.min.css'
                }]
            }
        }

    });

    // Load required modules
    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Task definitions
    //grunt.registerTask('default', ['concat']);
    grunt.registerTask('default', ['less', 'cssmin']);
};