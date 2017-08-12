
function main() {

  ctx.canvas.width = document.getElementById("container").offsetWidth;
  ctx.canvas.height = document.getElementById("container").offsetHeight;

  generateCompleteGraph(30);
  // generatePartialGraph(4);
  drawGraph(nodes);
  console.log(nodes)
}
main();
