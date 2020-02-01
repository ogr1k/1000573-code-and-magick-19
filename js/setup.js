'use strict';
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATS_COLORS = ['rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_QUANTITY = 4;
var userDialog = document.querySelector('.setup');

var MAIN_WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var FIREBALL_BACKGROUND_COLLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

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

var getRandomElement = function (elements) {
  return elements[getRandomIndex(elements)];
};


var getWizardFullName = function () {
  var fullName = getRandomElement(WIZARDS_NAMES) + ' ' + getRandomElement(WIZARDS_SURNAMES);
  return fullName;
};

var wizards = [];
var createWizardsList = function () {
  for (var i = 0; i < WIZARDS_QUANTITY; i++) {
    wizards.push({
      name: getWizardFullName(),
      coatColor: getRandomElement(WIZARDS_COATS_COLORS),
      eyesColor: getRandomElement(WIZARDS_EYES_COLORS)
    });
  }
};

createWizardsList();

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


var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var inputPlayerName = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (document.activeElement !== inputPlayerName) {
    if (evt.key === ESC_KEY) {
      closePopup();
    }
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});


var wizardCoatCollorElement = setup.querySelector('.wizard-coat');
var wizardEyesCollorElement = setup.querySelector('.wizard-eyes');
var fireballCollorElement = setup.querySelector('.setup-fireball-wrap');
var wizardCoatCollorInput = setup.querySelector('#coat-color-input');
var wizardEyesCollorInput = setup.querySelector('#eyes-color-input');
var fireballCollorInput = setup.querySelector('#eyes-color-input');

var getRandomColor = function (elements, item, input, method) {
  var randomColorElement = getRandomElement(elements);
  item.style[method] = randomColorElement;
  input.value = randomColorElement;
};

wizardCoatCollorElement.addEventListener('click', function () {
  getRandomColor(MAIN_WIZARD_COAT_COLORS, wizardCoatCollorElement, wizardCoatCollorInput, 'fill');
});

wizardEyesCollorElement.addEventListener('click', function () {
  getRandomColor(WIZARDS_EYES_COLORS, wizardEyesCollorElement, wizardEyesCollorInput, 'fill');
});

fireballCollorElement .addEventListener('click', function () {
  getRandomColor(FIREBALL_BACKGROUND_COLLORS, fireballCollorElement, fireballCollorInput, 'background');


});

