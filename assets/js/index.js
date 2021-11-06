'use strict';

const buttons = document.getElementsByClassName('btn');
const itemSection = document.getElementById('item-list');
const items = document.getElementsByClassName('item');
let activeBtn = null;

for (const button of buttons) {
  button.textContent = button.dataset.flexDirection;
  button.addEventListener('click', flexHandler);
  if (button.dataset.currentItem === 'true') {
    setActiveButton(button);
    setFlexDirection(button);
    activeBtn = button;
  } else {
    setUnactiveButton(button);
  }
}

function setActiveButton(button) {
  button.style.background = 'cornflowerblue';
  button.style.color = 'white';
}

function setUnactiveButton(button) {
  button.style.background = 'white';
  button.style.color = 'black';
}

function setFlexDirection({dataset: {flexDirection}}) {
  itemSection.style.flexDirection = flexDirection;
  for (const item of items) {
    if (flexDirection.includes('COLUMN')) {
      item.style.width = '100%';
      item.style.height = 'unset';
    } else {
      item.style.width = 'unset';
      item.style.height = '100%';
    }
  }
}

function flexHandler({ target: currentBtn }) {
  setUnactiveButton(activeBtn);
  setActiveButton(currentBtn);
  setFlexDirection(currentBtn);
  activeBtn = currentBtn;
}
