let image = document.querySelector('#img');
image.addEventListener('click', function () {
  let inputValue = parseInt(document.querySelector('.corgi-counter').value, 10);
  inputValue = isNaN(inputValue) ? 0 : inputValue;
  inputValue++;
  document.querySelector('.corgi-counter').value = inputValue;
});
