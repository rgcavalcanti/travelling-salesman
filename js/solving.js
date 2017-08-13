var nodesArray = [];
var sizeSolution = 0;
var record = -1;
var recordArray = [];
var totalDistance = -1;

function initSolutionArray(nodes) {
  nodesArray = [];

  for (node in nodes) {
    nodesArray.push(node);
  }
}

function bruteForce(nodesArray) {

  if (intervalID == null) {
    totalDistance = -1;
    record = -1;
    recordArray = [];
  }

  for (var i = 1; i < nodesArray.length; i++) {
    totalDistance += calcDistance(nodesArray[i-1], nodesArray[i]);
  }

  if(totalDistance < record || (record == -1 && totalDistance > 0)){
    record = totalDistance;
    recordArray = nodesArray;
  }

  clear(solutionCtx);
  drawRecordPath(recordArray, solutionCtx);

  if(nextPermutation(nodesArray)) {
    if(intervalID == null) {
      intervalID = setInterval(bruteForce,10, nodesArray);
    }
  }
  else{
    clearInterval(intervalID);
    intervalID = null;
    console.log("finish");
  }

}
