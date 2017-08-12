(function(){
  problemCtx.canvas.width = document.getElementsByClassName("container").item(0).offsetWidth/2;
  problemCtx.canvas.height = document.getElementsByClassName("container").item(0).offsetHeight;

  solutionCtx.canvas.width = document.getElementsByClassName("container").item(0).offsetWidth/2;
  solutionCtx.canvas.height = document.getElementsByClassName("container").item(0).offsetHeight;

})();

function makeSolution () {
  drawNodes(nodes, solutionCtx);
}


function main() {

  nodes = {};
  let numNodes = document.getElementsByName("nodesNumber").item(0).value || 4;
  let typeGraph = document.getElementsByName("typeGraph").item(0).value;

  clear();

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

  makeSolution();
}
main();
