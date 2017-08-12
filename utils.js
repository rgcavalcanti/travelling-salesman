//Configuration

var nodes = {};
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var ballRadius = 7;
var ballDiameter = ballRadius * 2;

//Random

function randomRange(min, max) {
  return Math.floor((Math.random() * (max-min+1))+min);
}
function randomNodeX() {
  return Math.floor(Math.random() * (canvas.width - ballDiameter) + ballRadius);
}
function randomNodeY() {
  return Math.floor(Math.random() * (canvas.height - ballDiameter) + ballRadius);
}

//Utils

function maxEdges(numNodes) {
  return (numNodes * (numNodes - 1))/2;
}
function countConnections(nodeIndex) {
  return nodes[nodeIndex].connections.length;
}
function connected(a, b) {
  return
}

//Generators

function generateNodeList(numNodes) {

  let connections = [];

  for (var i = 0; i < numNodes; i++) {
    nodes[i] = {x: randomNodeX(), y: randomNodeY()};
    nodes[i].connections = [];
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

  let numNodes = Object.keys(nodes).length;
  let numEdges = randomRange(numNodes, maxEdges(numNodes));
  let connection;

  for (var item in nodes) {

    if(item == numNodes - 1){
      connection = 0;
    }
    else {
      connection = parseInt(item) + 1;
    }

    numEdges -= 1;
    nodes[item].connections.push(connection);
    nodes[connection].connections.push(parseInt(item));
  }


  let node1 = randomRange(0, numNodes - 1);
  let node2 = randomRange(0, numNodes - 1);

  while(numEdges >= 1) {
    if (node1 == node2 || nodes[node1].connections.includes(node2)) {

      node1 = randomRange(0, numNodes - 1);
      node2 = randomRange(0, numNodes - 1);
    }
    else {
      nodes[node1].connections.push(node2);
      nodes[node2].connections.push(node1);

      numEdges -=1;
    }
  }

  console.log("arestas restantes: ", numEdges);
}
function generateCompleteGraph(numNodes){
  generateNodeList(numNodes);
  generateCompleteConnections(nodes);
}
function generatePartialGraph(numNodes){
  generateNodeList(numNodes);
  generatePartialConnections(nodes);
}

//Drawings

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
      if(nodes[p].connections[i] >= p) {
        ctx.beginPath();
        ctx.moveTo(nodes[p].x, nodes[p].y);
        ctx.strokeStyle = "rgba(30, 31, 36, 0.3)";
        ctx.lineTo(nodes[nodes[p].connections[i]].x, nodes[nodes[p].connections[i]].y);
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

  }

  drawNodes(nodes);
}
