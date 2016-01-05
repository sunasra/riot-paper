var css_files = [
    "scss/common.scss",
    "rp-loader/rp-loader.scss",
];

var components = [
    "rp-loader/rp-loader.html"
];

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: {
            pre_build: "lib/css/*",
            post_build: ["lib/css/compiledscss.scss","lib/components/compiledcomponents.tag"]
        },

        concat: {
            concat_css: {
                src: css_files,
                dest: "lib/css/compiledscss.scss",
            },
            concat_tags: {
                src: components,
                dest: "lib/components/compiledcomponents.tag",
            }
        },
        sass: {
            options: {
                compass: true,
                sourceMap: true
            },
            dist: {
                files: {
                    "lib/css/riot-paper.css": "lib/css/compiledscss.scss"
                }
            }
        },
        riot: {
            options: {
                compact: true
            },
            tags: {
                src: "lib/components/compiledcomponents.tag",
                dest: "lib/components/riot-paper.js"
            },
        },
    });

    // Load the plugin that provides the "clean" task.
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Load the plugin that provides the "concat" task.
    grunt.loadNpmTasks("grunt-contrib-concat");

    // Load the plugin that provides the "sass" task.
    grunt.loadNpmTasks("grunt-sass");

    // Load the plugin that provides the "riot" task.
    grunt.loadNpmTasks("grunt-riot");

    //Task for building the static contents of the application
    grunt.registerTask("default", ["clean:pre_build", "concat", "sass", "riot","clean:post_build"]);
};