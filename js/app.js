//Core functions
function main() {

  if (intervalID) {
    clearInterval(intervalID)
    intervalID = null;
  }

  debugger;
  let numNodes = document.getElementsByName("nodesNumber").item(0).value || 4;
  let typeGraph = document.getElementsByName("typeGraph").item(0).value;

  clear(problemCtx);
  clear(solutionCtx);

  switch (typeGraph) {
    case "complete":
      generateCompleteGraph(numNodes);
      break;
    case "partial":
      generatePartialGraph(numNodes);
      break;
    default:
      generateCompleteGraph(4);
      break;
  }

  drawGraph(nodes, problemCtx);
}

function solve(algorithm) {

  initSolutionArray(nodes);

  switch (algorithm) {
    case "bruteForce":
      bruteForce(nodesArray);
      break;
  }
}
