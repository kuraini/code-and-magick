'use strict';

(function () {
  function colorizeElement(element, colors, callback) {
    element.addEventListener('click', function () {
      var color = window.util.getRandomInArray(colors);

      if (typeof callback === 'function') {
        callback(element, color);
      }
    });
  }

  window.colorizeElement = colorizeElement;
})();
