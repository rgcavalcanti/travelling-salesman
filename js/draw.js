//Drawings

function drawNodes(nodes, context) {

  for (p in nodes) {
    context.beginPath();
    context.fillStyle = "rgba(30, 31, 36, 1)";
    context.arc(nodes[p].x, nodes[p].y, ballRadius, 0, Math.PI * 2, true);
    context.fill();
    //TODO criar condição para mostrar texto dos pontos
    // context.font = "20px sans-serif";
    // context.fillStyle = "white";
    // context.textAlign="center";
    // context.fillText(p, nodes[p].x, nodes[p].y + 7);
  }
}

function drawGraph(nodes, context) {

  for (var p in nodes) {

    for (var i = 0; i < nodes[p].connections.length; i++) {
      if(nodes[p].connections[i] >= p) {
        context.beginPath();
        context.moveTo(nodes[p].x, nodes[p].y);
        context.strokeStyle = "rgba(30, 31, 36, 0.3)";
        context.lineTo(nodes[nodes[p].connections[i]].x, nodes[nodes[p].connections[i]].y);
        context.lineWidth = 4;
        context.stroke();
      }
    }

  }

  drawNodes(nodes, context);
}

function drawRecordNodes(array, context){
  for (var i = 0; i < array.length; i++) {
    context.beginPath();
    context.fillStyle = "rgba(30, 31, 36, 1)";
    context.arc(nodes[array[i]].x, nodes[array[i]].y, ballRadius, 0, Math.PI * 2, true);
    context.fill();
  }

}

function drawRecordPath(array, context) {
  for (var i = 1; i < array.length; i++) {
    context.beginPath();
    context.moveTo(nodes[array[i-1]].x, nodes[array[i-1]].y);
    context.strokeStyle = "rgba(202, 27, 27, 0.5)";
    context.lineTo(nodes[array[i]].x, nodes[array[i]].y);
    context.lineWidth = 4;
    context.stroke();
  }

  drawRecordNodes(array, context);
}
