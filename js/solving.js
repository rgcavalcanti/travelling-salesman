var nodesArray = [];
var sizeSolution = 0;
var record = -1;
var recordArray = [];
var totalDistance = -1;
var numPermutations = 0;

function initSolutionArray(nodes) {
  nodesArray = [];

  for (node in nodes) {
    nodesArray.push(node);
  }
}

function bruteForce(nodesArray) {

  totalDistance = -1;

  if (intervalID == null) {
    record = -1;
    recordArray = [];
    step = 1;
  }


  for (var i = 1; i < nodesArray.length; i++) {
    totalDistance += calcDistance(nodesArray[i-1], nodesArray[i]);
  }
  totalDistance += calcDistance(nodesArray[nodesArray.length-1], nodesArray[0]);

  if(totalDistance < record || (record == -1 && totalDistance > 0)){
    record = totalDistance;
    recordArray = nodesArray.concat(nodesArray[0]);
  }

  clear(solutionCtx);
  drawRecordArray(recordArray, solutionCtx);
  drawCompletePercentual(step, numPermutations, solutionCtx);
  clear(problemCtx);
  drawGraph(nodes, problemCtx);
  drawRecordArray(nodesArray.concat(nodesArray[0]), problemCtx);
  step++;
  console.log(nodesArray);

  if(nextPermutation(nodesArray)) {
    if(intervalID == null) {
      intervalID = setInterval(bruteForce, 10, nodesArray);
    }
  }
  else{
    clearInterval(intervalID);
    intervalID = null;
    console.log("finish! best is:", recordArray);
  }

}
