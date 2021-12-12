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

function lightBackground() {
  if (window.scrollY > window.innerHeight / 6) {
    document.body.classList.add('light');
  } else {
    document.body.classList.remove('light');
  }
}

window.addEventListener('scroll', lightBackground);

const img = document.querySelector('.corgiImg');
window.addEventListener('keypress', function (event) {
  img.classList.toggle('rotate');
});
