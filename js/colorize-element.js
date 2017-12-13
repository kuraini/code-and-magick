'use strict';

(function () {
  function colorizeElement(element, colors, callback) {
    var color = window.util.getRandomInArray(colors);

    if (typeof callback === 'function') {
      callback(element, color);
    }
  }

  window.colorizeElement = colorizeElement;
})();
