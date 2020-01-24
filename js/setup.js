'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

    var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var WIZARD_COLOR_COATS = ['rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

      var getRandomInteger = function (min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    };


    var wizards = [
  {
    name: WIZARD_NAMES[getRandomInteger(0, WIZARD_NAMES.length-1)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, WIZARD_NAMES.length-1)],
    coatColor: WIZARD_COLOR_COATS[getRandomInteger(0, WIZARD_COLOR_COATS.length-1)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInteger(0, WIZARD_EYES_COLOR.length-1)]
  },
  {
    name: WIZARD_NAMES[getRandomInteger(0, WIZARD_NAMES.length-1)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, WIZARD_NAMES.length-1)],
    coatColor: WIZARD_COLOR_COATS[getRandomInteger(0, WIZARD_COLOR_COATS.length-1)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInteger(0, WIZARD_EYES_COLOR.length-1)]
  },
  {
    name: WIZARD_NAMES[getRandomInteger(0, WIZARD_NAMES.length-1)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, WIZARD_NAMES.length-1)],
    coatColor: WIZARD_COLOR_COATS[getRandomInteger(0, WIZARD_COLOR_COATS.length-1)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInteger(0, WIZARD_EYES_COLOR.length-1)]
  },
  {
    name: WIZARD_NAMES[getRandomInteger(0, WIZARD_NAMES.length-1)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, WIZARD_NAMES.length-1)],
    coatColor: WIZARD_COLOR_COATS[getRandomInteger(0, WIZARD_COLOR_COATS.length-1)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInteger(0, WIZARD_EYES_COLOR.length-1)]
  }
];


    for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;



  similarListElement.appendChild(wizardElement);
}
