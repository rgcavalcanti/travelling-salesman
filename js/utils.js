//Random

function randomRange(min, max) {
  return Math.floor((Math.random() * (max-min+1))+min);
}
function randomNodeX() {
  return Math.floor(Math.random() * (problem.width - ballDiameter) + ballRadius);
}
function randomNodeY() {
  return Math.floor(Math.random() * (problem.height - ballDiameter) + ballRadius);
}

//Utils

function maxEdges(numNodes) {
  return (numNodes * (numNodes - 1))/2;
}

function countConnections(nodeIndex) {
  return nodes[nodeIndex].connections.length;
}

function clear(context) {
    context.clearRect(0, 0, problem.width, problem.height);
    context.clearRect(0, 0, problem.width, problem.height);
}

function calcDistance(a,b){
  var sideX = Math.abs(nodes[a].x - nodes[b].x);
  var sideY = Math.abs(nodes[a].y - nodes[b].y);
  return Math.sqrt(sideX * sideX + sideY * sideY);
}

function nextPermutation(array) {
	// Find non-increasing suffix
	var i = array.length - 1;
	while (i > 0 && array[i - 1] >= array[i])
		i--;
	if (i <= 0)
		return false;

	// Find successor to pivot
	var j = array.length - 1;
	while (array[j] <= array[i - 1])
		j--;
	var temp = array[i - 1];
	array[i - 1] = array[j];
	array[j] = temp;

	// Reverse suffix
	j = array.length - 1;
	while (i < j) {
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
		i++;
		j--;
	}
	return true;
}
