'use strict';

module.exports = function(stream) {
  var stream = stream || require('system').stdout;

  return {
    resetLine: function() {
      stream.write('\r');
    },

    newLine: function() {
      stream.write('\n');
    },

    resetCursor: function() {
    },

    output: function(message) {
      stream.write(message);
    }
  }
};
