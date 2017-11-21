'use strict';

function getMaxElement(arr) {
  var maxElement = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

function getRandomNumber() {
  return Math.ceil(Math.random() * 10) / 10;
}

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var histogramHeight = 150;
  var step = histogramHeight / (getMaxElement(times) - 0);
  var indent = 50;
  var barWidth = 40;
  var initialX = 150;
  var initialY = 90;
  var nameBarY = 260;
  var lineHeight = 10;

  for (var i = 0; i < times.length; i++) {
    ctx.fillText(times[i].toFixed(), initialX + (indent + barWidth) * i, histogramHeight - times[i] * step + initialY - lineHeight);
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + getRandomNumber() + ')';
    ctx.fillRect(initialX + (indent + barWidth) * i, histogramHeight - times[i] * step + initialY, barWidth, times[i] * step);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], initialX + (indent + barWidth) * i, nameBarY);
  }
};
