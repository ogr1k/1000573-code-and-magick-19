'use strict';
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATS_COLORS = ['rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplateElement = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomIndex = function (max) {
  var rand = Math.random() * max.length;
  return Math.floor(rand);
};

var getWizardFullName = function () {
  var fullName = WIZARDS_NAMES[getRandomIndex(WIZARDS_NAMES)] + ' ' + WIZARDS_SURNAMES[getRandomIndex(WIZARDS_SURNAMES)];
  return fullName;
};

var wizards = [];
for (var i = 0; i < 4; i++) {
  wizards.push({
    name: getWizardFullName(),
    coatColor: WIZARDS_COATS_COLORS[getRandomIndex(WIZARDS_COATS_COLORS)],
    eyesColor: WIZARDS_EYES_COLORS[getRandomIndex(WIZARDS_EYES_COLORS)]
  });
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplateElement.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);
