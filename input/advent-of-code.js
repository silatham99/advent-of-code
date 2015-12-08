var fs = require('fs');

module.exports = function(problem, solution) {
  fs.readFile('input/' + problem + '.txt', 'utf8', function (err, input) {
    if (err) {
      console.log(err);
      process.exit(-1);
    }
    solution(input);
    process.exit(0);
  });
};
