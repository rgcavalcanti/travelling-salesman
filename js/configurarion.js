//Variables

var nodes = {};
var problem = document.getElementById('problem');
var solution = document.getElementById('solution');
var problemCtx = problem.getContext('2d');
var solutionCtx = solution.getContext('2d');
var ballRadius = 2;
var ballDiameter = ballRadius * 2;
var intervalID = null;
//Initializers

(function(){
  problemCtx.canvas.width = document.getElementsByClassName("container").item(0).offsetWidth/2;
  problemCtx.canvas.height = document.getElementsByClassName("container").item(0).offsetHeight;

  solutionCtx.canvas.width = document.getElementsByClassName("container").item(0).offsetWidth/2;
  solutionCtx.canvas.height = document.getElementsByClassName("container").item(0).offsetHeight;

})();
