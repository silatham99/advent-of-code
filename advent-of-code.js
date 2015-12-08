var fs = require('fs');
var path = require('path');

module.exports = function(solution) {
  fs.readFile('input/' + path.basename(require.main.filename, '.js') + '.txt', 'utf8',
    function (err, input) {
      if (err) {
        console.log(err);
        process.exit(-1);
      }
      solution(input);
      process.exit(0);
    });
};
