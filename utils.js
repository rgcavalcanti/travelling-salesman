//Configuration

var nodes = {};
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var minConections = 1;
var maxConections = 1;
var ballRadius = 10;
var ballDiameter = ballRadius * 2;

//Methods

function randomRange(min, max) {
  return Math.floor((Math.random() * (max-min+1))+min);
}

function randomNodeX() {
  return Math.floor(Math.random() * (canvas.width - ballDiameter) + ballRadius);
}

function randomNodeY() {
  return Math.floor(Math.random() * (canvas.height - ballDiameter) + ballRadius);
}

function avaibleConnections(nodeIndex){
  return nodes[nodeIndex].limitConnections - nodes[nodeIndex].connections.length;
}

function canConnect(item, connection) {
  if (
    nodes[item].connections.includes(connection) ||
    connection == item ||
    avaibleConnections(connection) == 0
  ) {
    return false;
  }
  else {
    return true;
  }
}

function generateNodeList(numNodes) {

  let connections = [];

  for (var i = 0; i < numNodes; i++) {
    nodes[i] = {x: randomNodeX(), y: randomNodeY()};
    nodes[i].connections = [];
    nodes[i].limitConnections = randomRange(minConections, maxConections);
  }

  return nodes;
}

function generateCompleteConnections(nodes) {

  for (p in nodes) {

    for (var i = 0; i < Object.keys(nodes).length; i++) {
      if (i != p) {
        nodes[p].connections.push(i);
      }
    }
  }
}

function generatePartialConnections(nodes) {

  let connection;
  let remainConnections;

  for (var i = 0; i < 1; i++) {
    for (var item in nodes) {

      remainConnections = avaibleConnections(item);
      connection = randomRange(0, Object.keys(nodes).length - 1);

      if(remainConnections > 0) {

        while(canConnect(item, connection) == false) {
          connection = randomRange(0, Object.keys(nodes).length - 1);
        }

        nodes[item].connections.push(connection);
        nodes[connection].connections.push(parseInt(item));
      }
    }
  }
}

function generateCompleteGraph(numNodes){
  generateNodeList(numNodes);
  generateCompleteConnections(nodes);
}

function generatePartialGraph(numNodes){
  generateNodeList(numNodes);
  generatePartialConnections(nodes);
}

function drawNodes(nodes) {
  for (p in nodes) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(30, 31, 36, 1)";
    ctx.arc(nodes[p].x, nodes[p].y, ballRadius, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.textAlign="center";
    ctx.fillText(p, nodes[p].x, nodes[p].y + 3);
  }
}

function drawGraph(nodes) {

  for (var p in nodes) {

    for (var i = 0; i < nodes[p].connections.length; i++) {
      ctx.beginPath();
      ctx.moveTo(nodes[p].x, nodes[p].y);
      ctx.strokeStyle = "rgba(30, 31, 36, 0.3)";
      ctx.lineTo(nodes[nodes[p].connections[i]].x, nodes[nodes[p].connections[i]].y);
      ctx.lineWidth = 2;
      ctx.stroke();
    }

  }

  drawNodes(nodes);
}
