function main(){

  numNodes = document.querySelector('input').value || 4

  clear(problemCtx);
  generateCompleteGraph(numNodes);
  drawGraph(problemCtx);
}
