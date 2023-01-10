let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  document.body.classList.remove('lightmode');
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
  document.getElementById("moon").style.display="none";
  document.getElementById("sun").style.display="inline";
};

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  document.body.classList.add('lightmode');
  localStorage.setItem('darkMode', 'disabled');
  document.getElementById("sun").style.display="none";
  document.getElementById("moon").style.display="inline";
};

if (darkMode === 'disabled') {
  disableDarkMode();
};

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});