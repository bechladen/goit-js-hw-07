function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const amount = input.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

// ! V1:
// function createBoxes(amount) {
//   boxesContainer.innerHTML = '';

//   let size = 30;

//   const elements = [];

//   for (let i = 0; i < amount; i += 1) {
//     const box = document.createElement('div');
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     box.style.marginTop = '10px';

//     size += 10;

//     elements.push(box);
//   }

//   boxesContainer.append(...elements);
// }

// ! V2:
function createBoxes(amount) {
  boxesContainer.innerHTML = '';

  let size = 30;

  const elementsMarkup = [];

  for (let i = 0; i < amount; i += 1) {
    elementsMarkup.push(`
        <div style="
          width: ${size}px;
          height: ${size}px;
          background-color: ${getRandomHexColor()};
          margin-top: 10px;"></div>
      `);

    size += 10;
  }

  boxesContainer.innerHTML = elementsMarkup.join('');
}

destroyButton.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
