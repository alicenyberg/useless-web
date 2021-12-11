document
  .getElementsByClassName('corgi-container')
  .addEventListener('click', function (event) {
    let counter = document.getElementsByClassName('corgi-counter').textContent;
    parseInt(counter);
    counter++;
    document.getElementsByClassName('corgi-counter').textContent = counter;
  });
