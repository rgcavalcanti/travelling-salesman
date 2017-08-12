//Configuration

var points = {};
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var minConections = 2;
var maxConections = 2;
var ballRadius = 5;
var ballDiameter = ballRadius * 2;

//Methods

function randomRange(min, max) {
  return Math.floor((Math.random() * (max-min+1))+min);
}

function randomPointX() {
  return Math.floor(Math.random() * (canvas.width - ballDiameter) + ballRadius);
}

function randomPointY() {
  return Math.floor(Math.random() * (canvas.height - ballDiameter) + ballRadius);
}

function generatePointList(numPoints) {

  let connections = [];

  for (var i = 0; i < numPoints; i++) {
    points[i] = {x: randomPointX(), y: randomPointY()};
    points[i].connections = [];
    points[i].limitConnections = randomRange(minConections, maxConections);
  }

  return points;
}

function generateCompleteConnections(points) {

  for (p in points) {

    for (var i = 0; i < Object.keys(points).length; i++) {
      if (i != p) {
        points[p].connections.push(i);
      }
    }
  }
}

function generatePartialConnections(points) {
  for (var p in points) {

    let connection = randomRange(0, Object.keys(points).length - 1);

    for (var i = 0; i < points[p].limitConnections; i++) {

      while(points[p].connections.includes(connection) && points[connection].limitConnections <= points[connection].connections.length) {
        connection = randomRange(0, Object.keys(points).length - 1);
      }

      points[p].connections.push(connection);
      points[connection].connections.push(parseInt(p));
    }
  }
}

function generateCompleteGraph(numPoints){
  generatePointList(numPoints);
  generateCompleteConnections(points);
}

function generatePartialGraph(numPoints){
  generatePointList(numPoints);
  generatePartialConnections(points);
}

function drawPoints(points) {
  for (p in points) {
    ctx.beginPath();
    ctx.arc(points[p].x, points[p].y, ballRadius, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

function drawGraph(points) {
  drawPoints(points);

  for (var p in points) {

    for (var i = 0; i < points[p].connections.length; i++) {
      ctx.beginPath();
      ctx.moveTo(points[p].x, points[p].y);
      ctx.lineTo(points[i].x, points[i].y);
      ctx.stroke();
    }

  }
}
