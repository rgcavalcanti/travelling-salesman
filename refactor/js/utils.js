function randomRange(min, max) {
  return Math.floor((Math.random() * (max-min+1))+min);
}
function randomNodeX() {
  return Math.floor(Math.random() * (problemCtx.canvas.width - ballDiameter) + ballRadius);
}
function randomNodeY() {
  return Math.floor(Math.random() * (problemCtx.canvas.height - ballDiameter) + ballRadius);
}

function maxEdges(numNodes) {
  return (numNodes * (numNodes - 1))/2;
}
function calcDistance(a,b){
  var sideX = Math.abs(nodes[a].x - nodes[b].x);
  var sideY = Math.abs(nodes[a].y - nodes[b].y);
  return Math.sqrt(sideX * sideX + sideY * sideY);
}
function calcTotalPermutations(numNodes) {
  if (numNodes <= 1) {
    return 1;
  }
  else {
    return numNodes * calcTotalPermutations(numNodes - 1);
  }
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

function calcTriangleHeight(sideA, sideB, sideC){
  let p = (sideA + sideB + sideC)/2;
  let area = Math.sqrt(p*(p - sideA) * (p - sideB) * (p - sideC));

  return (2 * area)/sideC;
}

function calcTriangleMedian(sideA, sideB, sideC){
  return Math.sqrt(((2 * sideA * sideA) + (2 * sideB * sideB) - (sideC * sideC))/4)
}

function classifyTriangle(sides) {
  sides = sides.sort();

  if(Math.pow(sides[0]) + Math.pow(sides[1]) > Math.pow(sides[2])){
    return 'acute';
  }
  else if(Math.pow(sides[0]) + Math.pow(sides[1]) < Math.pow(sides[2])) {
    return 'obtuse';
  }
  else {
    return 'right';
  }
}
