'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COLOR_COATS = ['rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomInteger = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var maxIndexForName = WIZARD_NAMES.length - 1;
var maxIndexForCoatColor = WIZARD_COLOR_COATS.length - 1;
var maxIndexForEyesColor = WIZARD_EYES_COLOR.length - 1;

var wizards = [
  {
    name: WIZARD_NAMES[getRandomInteger(0, maxIndexForName)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, maxIndexForName)],
    coatColor: WIZARD_COLOR_COATS[getRandomInteger(0, maxIndexForCoatColor)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInteger(0, maxIndexForEyesColor)]
  },
  {
    name: WIZARD_NAMES[getRandomInteger(0, maxIndexForName)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, maxIndexForName)],
    coatColor: WIZARD_COLOR_COATS[getRandomInteger(0, maxIndexForCoatColor)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInteger(0, maxIndexForEyesColor)]
  },
  {
    name: WIZARD_NAMES[getRandomInteger(0, maxIndexForName)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, maxIndexForName)],
    coatColor: WIZARD_COLOR_COATS[getRandomInteger(0, maxIndexForCoatColor)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInteger(0, maxIndexForEyesColor)]
  },
  {
    name: WIZARD_NAMES[getRandomInteger(0, maxIndexForName)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, maxIndexForName)],
    coatColor: WIZARD_COLOR_COATS[getRandomInteger(0, maxIndexForCoatColor)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInteger(0, maxIndexForEyesColor)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');


