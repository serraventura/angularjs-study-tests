# Shopping list test / Responsive layout

- Shopping List on the angularjs-test folder;
- Responsive layout on the root, index.html.
- Shopping List live: http://serraventura.droppages.com/shoppingList/index.html
- Responsive layout live: http://serraventura.droppages.com/responsive_layout/index.html
- Applied a diff layout to max-device-width: 470px.
- A good practise would use a diff layout with lighter images for mobile.

Aiming to show my skills for the test, the simple shopping list was done with the following tools:

 - Yeoman generator: The generator-angular-feature was used to create the app's structure. This generator was chosen because I did contributions to the original repository on github. You can see it here: https://github.com/codigo-pl/generator-angular-feature/commit/cf46d46d27b0c01a9c6886b38d061b63a2b570f9

 - Bower: For dependency management;

 - Grunt: For localhost environment, build process(minify app) and test runner;

 - Node NPM: For manage node modules dependency for Grunt tasks;

 - Karma and Jasmine for unit testing


# Run DEV environment:

prerequisites:

 - NPM: Install Nodejs - https://nodejs.org/

 - Run: npm install -g bower
 - Run: npm install -g grunt-cli

 Inside app's folder

 - Run: npm install
 - Run: bower install
 - Run: grunt serve

 Now the app should be running on localhost


 # Unit testing

pre-requisites: 

- Run: npm install karma
* The recommended approach is to install Karma locally in the project's directory.

- Run: npm install -g karma-cli
- Run: grunt test (or karma start)

Only a Service was unit tested.

