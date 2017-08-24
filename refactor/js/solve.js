function bruteForce(ctx){

  journey = [];
  record = 0;
  step = 0;

  nodes.forEach((node, index) => {
    if (index != 0) {
      journey.push(index)
    }
  });

  function calcJourney(){

    for (var i = 1; i < journey.length; i++) {
      distance += calcDistance(journey[i-1], journey[i]);
    }

    distance += calcDistance(journey[journey.length-1],0);
    distance += calcDistance(0,journey[0]);

    if(distance < record || record == 0) {
      record = distance;
      clear(ctx)
      drawJourney(ctx);
    }

    distance = 0;
    step++;
    console.log((step/calcTotalPermutations(numNodes-1))*100);
    if(nextPermutation(journey)) {
      setTimeout(calcJourney);
    }
  }

  calcJourney();
}

function domination(ctx){
  journey = [0,1,2,0];
  record = 0;
  step = 0;
  distance = 0;
  let indexA = 0;

  for (var node = 3; node < nodes.length; node++) {
    for (var i = 1; i < journey.length; i++) {

      let sides = [calcDistance(node, journey[i-1]), calcDistance(node ,journey[i]), calcDistance(journey[i-1],journey[i])];

      if(classifyTriangle(sides) === 'obtuse'){
        distance = calcTriangleMedian(sides[0], sides[1], sides[2]);
      }
      else {
        distance = calcTriangleHeight(sides[0], sides[1], sides[2]);
      }

      if(distance < record || record == 0) {
        record = distance;
        indexA = i;
      }
    }
    record = 0;
    journey.splice(indexA, 0 , node);
    clear(ctx)
    drawJourney(ctx);
  }
  console.log(journey);

}
