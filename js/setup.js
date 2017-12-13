'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  function makeWizard(count) {
    var wizardsArray = [];
    for (var i = 0; i < count; i++) {
      wizardsArray[i] = {
        name: window.util.getRandomInArray(WIZARD_NAMES) + ' ' + window.util.getRandomInArray(WIZARD_SURNAMES),
        coatColor: window.util.getRandomInArray(COAT_COLORS),
        eyesColor: window.util.getRandomInArray(EYES_COLORS)
      };
    }
    return wizardsArray;
  }

  var wizards = makeWizard(4);

  var setup = document.querySelector('.setup');
  var userNameInput = setup.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', window.onPopupEscPress);
  });

  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');

  function fillElement(element, color) {
    element.style.fill = color;
  }

  function changeElementBackground(element, color) {
    element.style.backgroundColor = color;
  }

  wizardCoat.addEventListener('click', function () {
    window.colorizeElement(wizardCoat, COAT_COLORS, fillElement);
  });

  wizardEyes.addEventListener('click', function () {
    window.colorizeElement(wizardEyes, EYES_COLORS, fillElement);
  });

  fireball.addEventListener('click', function () {
    window.colorizeElement(fireball, FIREBALL_COLORS, changeElementBackground);
  });

  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  function makeFragment() {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    return fragment;
  }

  similarListElement.appendChild(makeFragment());
  setup.querySelector('.setup-similar').classList.remove('hidden');
})();
