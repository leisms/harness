// Create a test by simply making a new file with .test.js as the
// filetype in the same directory as the .js file you'd like to test.

// Use this boilerplate code below to set up your test section easily.

describe(utils.getFile(__filename), function() {

    var Sample;
    Sample = null;

    beforeEach(function() {
        Sample = require('./Sample'); // Require your .js module here
    });

    it('should exist', function() {
        should.exist(Sample);
    });

});