var fs = require('fs');
var path = require('path');

module.exports = function(solution) {
  var problem = path.basename(require.main.filename, '.js');
  
  console.log("Running solution for problem " + problem.split('-')[0] + "...");

  fs.readFile('input/' + problem + '.txt', 'utf8',
    function (err, input) {
      if (err) {
        console.log(err);
        process.exit(-1);
      }
      solution(input);
      process.exit(0);
    });
};
