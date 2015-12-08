var _ = require('underscore');
var AdventOfCode = require('./advent-of-code');

AdventOfCode(function(input) {
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
});
