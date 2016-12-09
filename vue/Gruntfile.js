module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scss: {
                files: 'app/scss/**/*.scss',
                tasks: ['sass']
            }
        },
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'app/css/style.css': 'app/scss/bootstrap.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'demo/**/*.css',
                        'demo/**/*.html',
                        'demo/**/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "demo",
                        index: "index.html"
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync',"watch"]);
};