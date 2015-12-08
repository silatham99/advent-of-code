var _ = require('underscore');
var fs = require('fs');

fs.readFile('input/1-not-quite-lisp.txt', 'utf8', function (err, input) {
  if (err) {
    console.log(err);
    process.exit(-1);
  }

  var position = 1;
  var basementPosition;
  var floor = _.reduce(input, function(sum, current) {
    var newFloor = sum + (current === '(' ? 1 : -1);
    if (newFloor === -1 && !basementPosition) {
      basementPosition = position;
    }
    position++;
    return newFloor;
  }, 0);

  console.log("End floor: ", floor);
  if (basementPosition) {
    console.log("Basement entered at position: ", basementPosition);
  }

  process.exit(0);
});
