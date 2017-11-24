'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

function getRandomInteger(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

var wizards = [
  {
    name: getRandomInteger(WIZARD_NAMES) + ' ' + getRandomInteger(WIZARD_SURNAMES),
    coatColor: getRandomInteger(COAT_COLORS),
    eyesColor: getRandomInteger(EYES_COLORS)
  },
  {
    name: getRandomInteger(WIZARD_NAMES) + ' ' + getRandomInteger(WIZARD_SURNAMES),
    coatColor: getRandomInteger(COAT_COLORS),
    eyesColor: getRandomInteger(EYES_COLORS)
  },
  {
    name: getRandomInteger(WIZARD_NAMES) + ' ' + getRandomInteger(WIZARD_SURNAMES),
    coatColor: getRandomInteger(COAT_COLORS),
    eyesColor: getRandomInteger(EYES_COLORS)
  },
  {
    name: getRandomInteger(WIZARD_NAMES) + ' ' + getRandomInteger(WIZARD_SURNAMES),
    coatColor: getRandomInteger(COAT_COLORS),
    eyesColor: getRandomInteger(EYES_COLORS)
  }
];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
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
userDialog.querySelector('.setup-similar').classList.remove('hidden');
