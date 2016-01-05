var css_files = [
    "scss/common.scss",
    "rp-loader/rp-loader.scss",
];

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: {
            pre_build: "css/*",
            post_build:"css/compiledscss.scss"
        },

        concat: {
            concat_js: {
                src: css_files,
                dest: "css/compiledscss.scss",
            }
        },
        sass: {
            options: {
                compass: true,
                sourceMap: true
            },
            dist: {
                files: {
                    "css/riot-paper.css": "css/compiledscss.scss"
                }
            }
        }
    });

    // Load the plugin that provides the "clean" task.
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Load the plugin that provides the "concat" task.
    grunt.loadNpmTasks("grunt-contrib-concat");

    // Load the plugin that provides the "sass" task.
    grunt.loadNpmTasks("grunt-sass");

    //Task for building the static contents of the application
    grunt.registerTask("default", ["clean:pre_build", "concat", "sass","clean:post_build"]);
};