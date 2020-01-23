'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 90;
var MAX_SATURATION = 100;
var MIN_SATURATION = 30;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var NAME_TEXT_Y = 270;
var MESSAGE_FONT_SIZE = 16;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (elements) {
  var maxElement = elements[0];

  for (var i = 0; i < elements.length; i++) {
    if (elements[i] > maxElement) {
      maxElement = elements[i];
    }
  }

  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + GAP + MESSAGE_FONT_SIZE);
  ctx.fillText('Список результатов: ', CLOUD_X + FONT_GAP, CLOUD_Y + GAP + MESSAGE_FONT_SIZE * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    var getRandomInteger = function (min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    };

    var randomSaturation = getRandomInteger(MIN_SATURATION, MAX_SATURATION) + '%';
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240,' + randomSaturation + ', 60%)';
    var dynamicBarHeight = (BAR_HEIGHT * times[i]) / maxTime;
    var dynamicCloudY = NAME_TEXT_Y - dynamicBarHeight - GAP;
    var dynamicCloudX = CLOUD_X + GAP + FONT_GAP * i;
    ctx.fillRect(dynamicCloudX, dynamicCloudY, BAR_WIDTH, dynamicBarHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], dynamicCloudX, NAME_TEXT_Y);
    var score = Math.round(times[i]);
    ctx.fillText(score, dynamicCloudX, dynamicCloudY - GAP);
  }
};

