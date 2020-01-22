'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 90;


var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var random = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

var RandomSaturation = random (20, 100) + '%';

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  for (var i = 0; i < names.length; i++) {

  var maxTime = getMaxElement(times);

  if (names[i] === "Вы") {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'hsl(240, RandomSaturation, 60%)';
  }

  var HEIGHT = (BAR_HEIGHT * times[i]) / maxTime;
  var Y = 250 - HEIGHT;
  ctx.fillRect(CLOUD_X + GAP + FONT_GAP * i, Y, 40, HEIGHT);
  ctx.fillStyle = '#000';
  ctx.fillText(names[i], CLOUD_X + GAP + FONT_GAP * i, 270);
  var score = Math.round (times[i]);
  ctx.fillText(score, CLOUD_X + GAP + FONT_GAP * i, Y - 15);
  };
};

