# GruntJS Boilerplate v1.0 #


Basic Grunt setup for quick-start projects. This is an ongoing repo, so changes are bound to happen.

**NOTE**: As a quick-start for cool shit, this boilerplate is light on support for IE < 9. 



## Getting Started ##

1. You will need `Node.js`, `npm`, and `grunt-cli` up and running on your machine. _Take a look at [Grunt's documentation](http://gruntjs.com/getting-started) to get caught up_.

2. Clone this baby into your new project directory.

3. Update the `package.json` file with the project name and description.

4. Via command line, `$ cd` into the project's root directory.

5. Run `$ npm install` and Grunt will setup all dependencies specified in the `package.json` file. _Use_ `$ sudo` _if the install rejects_.

6. Once everything is installed, the `Gruntfile.js` should be configured to allow you to run the `$ grunt watch` command (again, from the root directory) and all necessary sub-directories will be generated.

7. (Bonus for Git) If you're tracking the new repo via Git, pull the `.txt` off of the `gitignore.txt` file and prefix a `.` on the filename. You should wind up with `.gitignore`. Use this to drop tracking of extraneous task files / directories that will be overwritten anytime `$ npm install` is run on a new machine anyway.



## Version Notes ##

### Version 1.0 ###
* Kicked-off with tasks structure based on [Chris Coyier's Grunt Boilerplate](https://github.com/chriscoyier/My-Grunt-Boilerplate).
* Based on Grunt Boilerplate base model initially developed for [Faren&deg; Agency](http://www.farenagency.com). 
* Dropped default old IE support from original.
* Running bright and sparkling jQuery 2.1.3 by default.
