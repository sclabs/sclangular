sclangular
==========

sclabs flavored AngularJS seasoned with gulp and Express

Quick Start
-----------

1. If you don't have Node.js yet, install it from http://nodejs.org/.
2. Download [this repository](https://github.com/sclabs/sclangular/archive/master.zip) and `cd` into it.
3. Install gulp globally if you haven't yet with `npm install -g gulp`.
4. Install sclangular's dependencies with `npm install`.
5. Run `gulp`.
6. Browse to `http://localhost:3000/`

Features
--------

- JS and CSS concatenation and minification with sourcemaps for easy debugging.
- Partials can live next to their modules in `src/` but get moved to `assets/partials/` for deployment.
- Built-in Express server to server the app via HTTP.
  - Pre-configured for `html5mode`-style server-side URL rewriting.
  - Livereload enabled out of the box. Save a change to any file in the project and watch the magic.
  - Can be used to mimic RESTful backend functionality for easy frontend development by serving JSON files from `server/` on routes defined in `server.js`.
  
Detailed Explanation
--------------------

`index.html`: The shell page for the AngularJS app. The server-side URL rewriting serves this page for all non-static file requests.  
`gulpfile.js`: The gulpfile. All the magic happens here.  
`server.js`: The Express dev server.  
`src/`: This is where our code goes.  
`src/module.js`: Defines the root module for the app, along with any dependencies.  
`src/app.css`: App-wide CSS styles go here.  
`src/config.js`: App-wide configuration (such as setting Values) goes here.  
`src/routes.js`: Self-explanatory.  
`src/someModule/`: Subdirectories under `src/` designate submodules in the app. All submodule-specific JS, CSS, and partials should go in this directory. You can name these files according to your favorite naming convention.  
`src/someModule/module.js`: Each module should have a `module.js` which defines the module and its dependencies.  
`assets/`: The directory that stores the site assets. This directory gets populated automatically with the production-ready concatenated and minified files. Its contents are automatically served through `express.static()` on the development server.  
`assets/js/app.js`: The concatenated and minified JS for the app.  
`assets/css/app.css`: The concatenated and minified CSS for the app.  
`assets/partials/`: Partials get collected from all the modules and dropped here, following the directory structure of `src/`.  
`server/`: You can put JSON documents or other files to be served by the Express development server to mimic the functionality of a backend you haven't written yet.

Philosophy
----------

Yes, this is Yet Another Angular Boilerplate Template. But we have opinions just like everyone else. We're mainly interested in two things.

### Simplicity

Understanding sclangular (to the point at which you feel comfortable tweaking/rewriting parts of it to reflect your own opinions) only really requires that you have a super basic understanding of two simple technologies - gulp and Express. If you have "Hello, World!" level experience with these two tools, you should have no problems being able to see what's going on in `gulpfile.js` and `server.js`.

### Submodule Hierarchy

Angular's module system is great. We want to use it. We also want to lay out our project structure so that each module gets its own folder and each submodule gets a subfolder. This keeps the files organized by functionality, which is good because that's how we tend to work on them.

Nice things we would like to have aka TODO
------------------------------------------

- Angular modules should automatically depend on the modules in the subdirectories. Sounds like a job for gulp.
- Routing that doesn't suck.
