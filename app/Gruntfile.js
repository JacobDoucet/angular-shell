module.exports = function(grunt){
  grunt.initConfig({
    sass : {
      dev : {
        options : {
          style : 'expanded',
          compass : false
        },
        files : {
          'public/web/assets/css/style.css' : 'src/web/sass/style.scss'
        }
      }
    },

    copy : {
      src : {
        cwd : 'source',
        src : ['**/*', '!**/*~', '!**/sass/**'],
        dest : 'public',
        expand : true
      }
    },

    replace : {
      task : {
        src : ['public/web/**/*.*'],
        overwrite : true,
        replacements : []
      }
    },

    clean :["public/*"]
  });

  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', [
    'clean'
    , 'copy:src'
  ]);
}
