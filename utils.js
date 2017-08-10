var points = [];
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var maxConections = 2;
var minConections = 2;

function randomRange(min, max) {
  return Math.floor((Math.random() * (max-min+1))+min);
}

function randomPoint() {
  return Math.floor((Math.random() * (canvas.width*(9/10))) + (canvas.width*(1/20)));
}

function generatePointList(numPoints) {

  points = [];

  for (var i = 0; i < numPoints; i++) {
    points[i] = [randomPoint(),randomPoint()];
  }

  return points;
}

function drawPoints(points) {
  for (var i = 0; i < points.length; i++) {
    ctx.beginPath();
    ctx.arc(points[i][0], points[i][1], 3, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

function drawGraph(points) {
  drawPoints(points);


  for (var i = 0; i < points.length - 1; i++) {
    ctx.beginPath();
    ctx.moveTo(points[i][0], points[i][1]);
    ctx.lineTo(points[i+1][0], points[i+1][1]);
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.moveTo(points[points.length - 1][0], points[points.length - 1][1]);
  ctx.lineTo(points[0][0], points[0][1]);
  ctx.stroke();
}
