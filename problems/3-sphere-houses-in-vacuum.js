var _ = require('underscore');
var AdventOfCode = require('../advent-of-code');

AdventOfCode(function(input) {
  var uniqueHouses = function(deliveries) {
    var houses = _.countBy(deliveries, function(house) {
      return house.x + ',' + house.y;
    });
    return Object.keys(houses).length;
  };
  var moveSanta = function(direction, current, deliveries) {
    switch(direction) {
      case '^':
        deliveries.push({ x: current.x, y: ++current.y });
        break;
      case '>':
        deliveries.push({ x: ++current.x, y: current.y });
        break;
      case 'v':
        deliveries.push({ x: current.x, y: --current.y });
        break;
      case '<':
        deliveries.push({ x: --current.x, y: current.y });
        break;
    }
  };

  var coordinates = {
    2014: { santa: { x: 0, y: 0 } },
    2015: { santa: { x: 0, y: 0 }, robosanta: { x: 0, y: 0 } }
  };
  var deliveries = { 2014: [{ x: 0, y: 0 }], 2015: [{ x: 0, y: 0 }] }
  var roboSanta = false;

  _.each(input, function(direction) {
    moveSanta(direction, coordinates[2014]['santa'], deliveries[2014]);
    moveSanta(direction, coordinates[2015][(roboSanta ? 'santa' : 'robosanta')], deliveries[2015]);
    roboSanta = !roboSanta;
  });

  console.log("Number of houses Santa visited: ", uniqueHouses(deliveries[2014]));
  console.log("Number of houses Santa and Robo-Santa visited: ", uniqueHouses(deliveries[2015]));
});
