'use strict';
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COLOR_COATS = ['rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplateElement = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomIndex = function (max) {
  var rand = Math.random() * max;
  return Math.floor(rand);
};

var wizards = [
  {
    name: WIZARDS_NAMES[getRandomIndex(WIZARDS_NAMES.length)] + ' ' + WIZARDS_SURNAMES[getRandomIndex(WIZARDS_NAMES.length)],
    coatColor: WIZARDS_COLOR_COATS[getRandomIndex(WIZARDS_COLOR_COATS.length)],
    eyesColor: WIZARDS_EYES_COLOR[getRandomIndex(WIZARDS_EYES_COLOR.length)]
  },
  {
    name: WIZARDS_NAMES[getRandomIndex(WIZARDS_NAMES.length)] + ' ' + WIZARDS_SURNAMES[getRandomIndex(WIZARDS_NAMES.length)],
    coatColor: WIZARDS_COLOR_COATS[getRandomIndex(WIZARDS_COLOR_COATS.length)],
    eyesColor: WIZARDS_EYES_COLOR[getRandomIndex(WIZARDS_EYES_COLOR.length)]
  },
  {
    name: WIZARDS_NAMES[getRandomIndex(WIZARDS_NAMES.length)] + ' ' + WIZARDS_SURNAMES[getRandomIndex(WIZARDS_NAMES.length)],
    coatColor: WIZARDS_COLOR_COATS[getRandomIndex(WIZARDS_COLOR_COATS.length)],
    eyesColor: WIZARDS_EYES_COLOR[getRandomIndex(WIZARDS_EYES_COLOR.length)]
  },
  {
    name: WIZARDS_NAMES[getRandomIndex(WIZARDS_NAMES.length)] + ' ' + WIZARDS_SURNAMES[getRandomIndex(WIZARDS_NAMES.length)],
    coatColor: WIZARDS_COLOR_COATS[getRandomIndex(WIZARDS_COLOR_COATS.length)],
    eyesColor: WIZARDS_EYES_COLOR[getRandomIndex(WIZARDS_EYES_COLOR.length)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplateElement.cloneNode(true);

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
