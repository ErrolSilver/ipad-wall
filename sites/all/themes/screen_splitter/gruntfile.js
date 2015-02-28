module.exports = function(grunt) {

  // All configuration goes here 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'js/*.js', // All JS in the js folder
        ],
        dest: 'js/build/production.js',
      }
    }, // End Concat

    uglify: {
      build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
      }
    }, // End Uglify

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    }, // End Imagemin

    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css'
        }
      }
    }, // End Compass

    autoprefixer: {
      options: {
        browsers: ['last 8 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: '{,*/}*.css',
          dest: 'css/'
        }]
      }
    }, // End AutoPrefixer

    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['gruntfile.js', 'js/theme.js', 'js/app.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    }, // End JsHint

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint'],
      options: {
        livereload: true,
      }, 
      compass: {
        files: ['sass/{,*/}*.{scss,sass}'],
        tasks: ['compass', 'autoprefixer']
      },
      html: {
        files: ['*/.html','**/*.css'],
        options: {
            livereload: true
        },
      },
    }, // End Watch

  }); // End Configuration

  // Plugin references
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Task registration
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['concat', 'uglify', 'imagemin', 'autoprefixer', 'jshint']);
  grunt.registerTask('test', ['jshint', 'qunit']);

};
