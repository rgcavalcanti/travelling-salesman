function generateNodes(numNodes) {

  nodes = [];

  for (var i = 0; i < numNodes; i++) {
    nodes.push({x: randomNodeX(), y: randomNodeY(), connections: []})
  }
}

function generateCompleteConnections(){

  for (var node = 0; node < nodes.length; node++) {
    for (var connection = 0; connection < nodes.length; connection++) {
      if (node != connection) {
        nodes[node].connections.push(connection);
      }
    }
  }
}

function generateCompleteGraph(numNodes) {
  generateNodes(numNodes);
  generateCompleteConnections();
}
