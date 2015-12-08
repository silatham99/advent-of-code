var _ = require('underscore');
var AdventOfCode = require('./advent-of-code');

AdventOfCode(function(input) {
  var numericSort = function(x, y) { return x - y; };

  var boxes = _.map(input.trim().split('\n'), function(line) {
    var dimensions = line.toLowerCase().split('x');
    return {
      length: parseInt(dimensions[0], 10),
      width: parseInt(dimensions[1], 10),
      height: parseInt(dimensions[2], 10)
    }
  });

  var totalWrappingPaper = _.reduce(boxes, function(sum, box) {
    var areas = [(box.width * box.height), (box.height * box.length), (box.width * box.length)];
    return sum + _.reduce(areas, function(sum, side) { return sum + 2 * side; }, 0) + _.min(areas);
  }, 0);

  var totalRibbon = _.reduce(boxes, function(sum, box) {
    var bow = box.length * box.width * box.height;
    var shortestPerimeter = _.reduce([box.length, box.width, box.height].sort(numericSort).splice(0, 2),
      function(perimeter, length) {
        return perimeter + 2 * length;
      }, 0);
    return sum + shortestPerimeter + bow;
  }, 0);

  console.log("Total wrapping paper: ", totalWrappingPaper);
  console.log("Total ribbon: ", totalRibbon);
});
