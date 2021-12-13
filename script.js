const button = document.querySelector('.corgiContainer');
const counter = document.querySelector('.counterText');
const funMessage = document.querySelector('.message');
let count = 0;
button.addEventListener('click', () => {
  count++;
  counter.innerHTML = count;

  if (count === 5) {
    funMessage.textContent = 'woof!';
  }
  if (count === 10) {
    funMessage.textContent = 'more pls!';
  }
  if (count === 15) {
    funMessage.textContent = 'thank you!!';
  }
});

function blueBackground() {
  if (window.scrollY > window.innerHeight / 8) {
    document.body.classList.add('blue');
  } else {
    document.body.classList.remove('blue');
  }
}

window.addEventListener('scroll', blueBackground);

const img = document.querySelector('.corgiImg');
window.addEventListener('keypress', function (event) {
  img.classList.toggle('rotate');
});

window.addEventListener('touchstart', function (event) {
  img.classList.toggle('rotate');
});

const corgiInfos = ['my name is betty ', 'and i love hugs! '];
const corgiName = document.getElementById('corgiName');

corgiInfos.forEach((corgiInfo) => {
  corgiName.textContent += corgiInfo;
});
