var config = {

  app : "NewApp",
  appName : "App Name",

  directories : {
    app : 'web',
    server : 'server',
    api : 'api',

    public : 'public',
    assets : 'public/web/assets',
    javascripts : 'public/web/assets/javascripts',
    css : 'public/web/assets/css'
  },

  templates : {

  },


}

module.exports = function(grunt){
  grunt.initConfig({
    sass : {
      dev : {
        options : {
          style : 'expanded',
          compass : false
        },
        files : {
          'public/web/assets/css/style.css' : 'source/web/sass/style.scss'
        }
      }
    },

    copy : {
      src : {
        cwd : 'source',
        src : ['**/*', '!**/*~', '!**/sass/**'],
        dest : config.directories.public,
        expand : true
      },
      angularJS : {
        cwd : 'node_modules',
        src : ['angular*/**/*.js'],
        dest : config.directories.javascripts,
        expand : true
      },
      angularCSS : {
        cwd : 'node_modules',
        src : ['angular*/**/*.css'],
        dest : config.directories.css,
        expand : true
      },
      angularRoute : {
        cwd : 'node_modules',
        src : ['angular-route/*.js'],
        dest : config.directories.javascripts,
        expand : true
      },
      bootstrap : {
        cwd : 'node_modules/bootstrap-sass/assets',
        src : ['**/*', '!**/stylesheets/**'],
        dest : config.directories.assets,
        expand : true
      },
      jQuery : {
        cwd : 'node_modules',
        src : ['jquery/dist/jquery*.js'],
        dest : config.directories.javascripts,
        expand : true
      },
      jQueryUI : {
        cwd : 'node_modules',
        src : ['jquery-ui-dist/jquery-ui*.js'],
        dest : config.directories.javascripts,
        expand : true
      },
      sanitize : {
        cwd : 'node_modules',
        src : ['angular-sanitize/*.js'],
        dest : config.directories.javascripts,
        expand : true
      }

    },

    replace : {
      web : {
        src : ['public/web/**/*.*'],
        overwrite : true,
        replacements : [
          {
            from : ">>app<<",
            to : config.app
          },
          {
            from : ">>app-path<<",
            to : config.directories.app
          },
          {
            from : ">>app-name<<",
            to : config.appName
          }
        ]
      },
      server : {
        src : ['public/server/*.*'],
        overwrite : true,
        replacements : [
          {
            from : ">>app<<",
            to : config.app
          },
          {
            from : ">>app-path<<",
            to : config.directories.app
          },
          {
            from : ">>app-name<<",
            to : config.appName
          },
          {
            from : ">>server-path<<",
            to : config.directories.server
          }
        ]
      },
      api : {
        src : ['public/api/**'],
        overwrite : true,
        replacements : [
          {
            from : ">>app<<",
            to : config.app
          },
          {
            from : ">>app-path<<",
            to : config.directories.app
          },
          {
            from : ">>app-name<<",
            to : config.appName
          },
          {
            from : ">>server-path<<",
            to : config.directories.server
          }
        ]
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
    , 'copy:angularJS'
    , 'copy:angularCSS'
    , 'copy:angularRoute'
    , 'copy:bootstrap'
    , 'copy:jQuery'
    , 'copy:jQueryUI'
    , 'copy:sanitize'

    , 'sass:dev'

    , 'replace:web'
    , 'replace:server'
    , 'replace:api'
  ]);

  grunt.registerTask('web', [
    'clean'

    , 'copy:src'
    , 'copy:angularJS'
    , 'copy:angularCSS'
    , 'copy:angularRoute'
    , 'copy:bootstrap'
    , 'copy:jQuery'
    , 'copy:jQueryUI'
    , 'copy:sanitize'

    , 'sass:dev'

    , 'replace:web'
  ]);

  grunt.registerTask('server', [
    'replace:server'
  ]);

  grunt.registerTask('api', [
    'replace:api'
  ]);
}
