var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var pontos = [];

for (var i = 0; i < 5; i++) {
  pontos[i] = [randomPoint(),randomPoint()];

  ctx.beginPath();
  ctx.arc(pontos[i][0], pontos[i][1], 5, 0, Math.PI * 2, true);
  ctx.fill();
}
