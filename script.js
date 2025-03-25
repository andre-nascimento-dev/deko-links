const root  = document.getRootNode();
const switchButton = document.getElementById('SWITCH');

switchButton.addEventListener('click', () => {
  root.documentElement.classList.toggle('light');
});
