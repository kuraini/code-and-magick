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

function getColor(name) {
  if (name === 'Вы') {
    return 'rgba(255, 0, 0, 1)';
  }
  return 'rgba(0, 0, 255, ' + getRandomNumber() + ')';
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
  var step = histogramHeight / getMaxElement(times);
  var indent = 50;
  var barWidth = 40;
  var initialX = 150;
  var initialY = 90;
  var nameBarY = 260;
  var lineHeight = 10;

  for (var i = 0; i < times.length; i++) {
    // Находим высоту столбца
    var barHeight = times[i] * step;
    // Вычисляем координату столбца по оси Y: т.к. отрисовка происходит сверху вниз, надо вычесть высоту столбца из высоты гистограммы,
    // и опустить столбец вниз на initialY
    var barInitialY = histogramHeight - barHeight + initialY;
    // Вычисляем координату столбца по оси X
    var barInitialX = initialX + (indent + barWidth) * i;

    // Выводим текст со временем, округляем с помощью toFixed, берем координаты X и Y от столбца,
    // поднимаем координату Y от столбца на расстояние lineHeight
    ctx.fillText(times[i].toFixed(), barInitialX, barInitialY - lineHeight);
    ctx.fillStyle = getColor(names[i]);
    ctx.fillRect(barInitialX, barInitialY, barWidth, barHeight);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], barInitialX, nameBarY);
  }
};
