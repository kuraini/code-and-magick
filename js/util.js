'use strict';

window.util = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  return {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getRandomInArray: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    getMaxElementInArray: function (arr) {
      var maxElement = -1;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
      return maxElement;
    },
    getRandomNumber: function () {
      return Math.ceil(Math.random() * 10) / 10;
    },
    fillElement: function (element, color) {
      element.style.fill = color;
    },
    changeElementBackground: function (element, color) {
      element.style.backgroundColor = color;
    },
    createErrorMessage: function (message) {
      var node = document.createElement('div');
      var nodeIcon = document.createElement('span');
      node.classList.add('server-error');
      nodeIcon.classList.add('server-error__icon');
      node.textContent = message;
      document.body.insertAdjacentElement('afterbegin', node);
      node.appendChild(nodeIcon);
    }
  };
})();
