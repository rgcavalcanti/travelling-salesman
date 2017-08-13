//Drawings

function drawNodes(nodes, context) {

  for (node in nodes) {
    context.beginPath();
    context.fillStyle = "rgba(30, 31, 36, 1)";
    context.arc(nodes[node].x, nodes[node].y, ballRadius, 0, Math.PI * 2, true);
    context.fill();
    //TODO criar condição para mostrar texto dos pontos
    // context.font = "20px sans-serif";
    // context.fillStyle = "white";
    // context.textAlign="center";
    // context.fillText(p, nodes[p].x, nodes[p].y + 7);
  }
}

function drawGraph(nodes, context) {

  for (var node in nodes) {

    for (var i = 0; i < nodes[node].connections.length; i++) {
      if(nodes[node].connections[i] >= node) {
        context.beginPath();
        context.moveTo(nodes[node].x, nodes[node].y);
        context.strokeStyle = "rgba(30, 31, 36, 0.3)";
        context.lineTo(nodes[nodes[node].connections[i]].x, nodes[nodes[node].connections[i]].y);
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

function drawCompletePercentual(step ,total, context) {
  let percent = step/total;
  if(percent < 1){
    context.font = "20px sans-serif";
    context.textAlign="end";
    context.fillText("Actual Record: " + record.toFixed(2),context.canvas.width - 30, context.canvas.height - 60);
    context.fillText((percent * 100).toFixed(2) + "%",context.canvas.width - 30, context.canvas.height - 30);
  }
  else{
    context.font = "20px sans-serif";
    context.textAlign="end";
    context.fillText("Done! Best distance: " + record.toFixed(2),context.canvas.width - 30, context.canvas.height - 30);
  }
}

function drawRecordArray(array, context) {
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

function drawRecordObject(nodes, context){

}
