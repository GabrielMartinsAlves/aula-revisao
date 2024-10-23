/* eslint-disable linebreak-style */
var sails = require('sails');

// Before running any tests...
before(function(done) {
  this.timeout(50000);

  sails.lift({
    hooks: { grunt: false, csrf: false },
    log: { level: 'warn' },

  }, (err) => {
    if (err) { return done(err); }

    return done();
  });
});

after((done) => {
  sails.lower(done);

});
