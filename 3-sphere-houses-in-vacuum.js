var _ = require('underscore');
var AdventOfCode = require('./advent-of-code');

AdventOfCode(function(input) {
  var uniqueHouses = function(deliveries) {
    var houses = _.countBy(deliveries, function(house) {
      return house.x + ',' + house.y;
    });
    return Object.keys(houses).length;
  };
  
  var coordinates = {
    2014: { santa: { x: 0, y: 0 } },
    2015: { santa: { x: 0, y: 0 }, robosanta: { x: 0, y: 0 } }
  };
  var deliveries = { 2014: [{ x: 0, y: 0 }], 2015: [{ x: 0, y: 0 }] }
  var roboSanta = false;

  _.each(input, function(direction) {
    var current = {
      2014: coordinates[2014]['santa'],
      2015: coordinates[2015][(roboSanta ? 'santa' : 'robosanta')]
    };
    switch(direction) {
      case '^':
        deliveries[2014].push({ x: current[2014].x, y: ++current[2014].y });
        deliveries[2015].push({ x: current[2015].x, y: ++current[2015].y });
        break;
      case '>':
        deliveries[2014].push({ x: ++current[2014].x, y: current[2014].y });
        deliveries[2015].push({ x: ++current[2015].x, y: current[2015].y });
        break;
      case 'v':
        deliveries[2014].push({ x: current[2014].x, y: --current[2014].y });
        deliveries[2015].push({ x: current[2015].x, y: --current[2015].y });
        break;
      case '<':
        deliveries[2014].push({ x: --current[2014].x, y: current[2014].y });
        deliveries[2015].push({ x: --current[2015].x, y: current[2015].y });
        break;
    }
    roboSanta = !roboSanta;
  });

  console.log("Number of houses Santa visited: ", uniqueHouses(deliveries[2014]));
  console.log("Number of houses Santa and Robo-Santa visited: ", uniqueHouses(deliveries[2015]));
});
