var planet1;
var planet2;
var getPlanetInfo;

planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};

planet2 = {
    name: "Earth",
    position: 6,
    type: "Gas Giant",
    radius: 69786,
    sizeRank: 2
};

getPlanetInfo = function (planet) {
    return planet.name + ": planet number " + planet.position;
};
console.log(getPlanetInfo(planet1));

getPlanetInfo = function (planet) {
    return planet.name + ": planet number " + planet.position;
};
console.log(getPlanetInfo(planet2));