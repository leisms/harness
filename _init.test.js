// This is the primary test setup routine. It's run
// first because it should be the first *.test.js
// in the root directory of your project.

// After requiring 'should.js' it is impossible to
// add a var called 'should' to the global namespace.
// This workaround makes should available in all test files.

var should;

should = {
    exist: function() {
        return require("should").exist;
    }
  , not: function() {
        return function(obj, msg) {
            return require("should").not;
        };
    }
};

should.not.exist = function() {
    return function(obj, msg) {
        return require("should").not.exist;
    };
};

global.should = should;

// This sets up global utility functions

global.utils = {
    // getFile is a simple utilty function that finds
    // the name of the current .js module that you're testing.
    getFile: function(filename) {
        return ((require('path')).relative(process.cwd(), filename)).replace('.test.js', '.js');
    }
};

// Set the title you'd like to show at the top of your
// testing suite here.

console.log('\nHarness Testing Suite:');