
function main() {

  ctx.canvas.width = document.getElementById("container").offsetWidth;
  ctx.canvas.height = document.getElementById("container").offsetHeight;

  // generateCompleteGraph(4);
  generatePartialGraph(20);
  drawGraph(nodes);
  // console.log(nodes);

  // drawGraph(fixedNodes);
}
main();
