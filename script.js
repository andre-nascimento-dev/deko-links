const switchButton = document.getElementById('SWITCH');

switchButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
});
