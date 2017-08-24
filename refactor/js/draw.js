function clear(ctx){
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawNodes(ctx) {

  let index = 0;

  for (node of nodes) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(30, 31, 36, 1)";
    ctx.arc(node.x, node.y, ballRadius, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
    if(enableIndex){
      ctx.beginPath();
      ctx.font = "8px sans-serif";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(index++, node.x, node.y);
      ctx.closePath();
    }
  }
}


function drawJourney(ctx){

  let tmp = [0].concat(journey.concat(0));

  for (var i = 1; i < tmp.length; i++) {
    ctx.beginPath();
    ctx.moveTo(nodes[tmp[i-1]].x, nodes[tmp[i-1]].y);
    ctx.strokeStyle = "rgba(150, 21, 16, 0.3)";
    ctx.lineTo(nodes[tmp[i]].x, nodes[tmp[i]].y);
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    ctx.closePath();
  }

  drawNodes(ctx);
}

function drawGraph(ctx) {

  nodes.forEach((node, index, nodes) => {
    for (let i = 0; i < node.connections.length; i++) {
      if(node.connections[i] >= index) {
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.strokeStyle = "rgba(30, 31, 36, 0.3)";
        ctx.lineTo(nodes[node.connections[i]].x, nodes[node.connections[i]].y);
        ctx.lineWidth = lineWidth;
        ctx.stroke();
        ctx.closePath();
      }
    }
  });

  drawNodes(ctx);
}
