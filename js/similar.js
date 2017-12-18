'use strict';

(function () {
  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  var coatColor;
  var eyesColor;
  var wizards = [];

  function getRank(wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  }

  function namesComparator(left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  function updateWizards() {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  }

  var wizard = {
    onEyesChange: function (color) {
      eyesColor = color;
      window.debounce(updateWizards);
    },
    onCoatChange: function (color) {
      coatColor = color;
      window.debounce(updateWizards);
    }
  };

  var wizardElement = document.querySelector('.setup-wizard');
  var wizardCoat = wizardElement.querySelector('.wizard-coat');
  var wizardEyes = wizardElement.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  window.colorizeElement(fireball, FIREBALL_COLORS, window.util.changeElementBackground);

  wizardCoat.addEventListener('click', function () {
    var newColor = window.util.getRandomInArray(COAT_COLORS);
    wizardCoat.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = window.util.getRandomInArray(EYES_COLORS);
    wizardEyes.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  function successHandler(data) {
    wizards = data;
    updateWizards();
  }

  function errorHandler(errorMessage) {
    window.util.createErrorMessage(errorMessage);
  }

  window.backend.load(successHandler, errorHandler);
})();
