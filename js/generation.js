//Generators

function generateNodeList(numNodes) {

  nodes = [];

  for (var i = 0; i < numNodes; i++) {
    nodes[i] = {x: randomNodeX(), y: randomNodeY()};
    nodes[i].connections = [];
  }

  return nodes;
}

function generateCompleteConnections(nodes) {

  for (node in nodes) {

    for (var i = 0; i < Object.keys(nodes).length; i++) {
      if (i != node) {
        nodes[node].connections.push(i);
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
}

function generateCompleteGraph(numNodes){
  generateNodeList(numNodes);
  generateCompleteConnections(nodes);
}

function generatePartialGraph(numNodes){
  generateNodeList(numNodes);
  generatePartialConnections(nodes);
}
