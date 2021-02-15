import './styles.css';
import menuItems from './menu.json';
import menuTemplate from './templates/menu-items.hbs';

const refs = {
  body: document.querySelector('body'),
  menuList: document.querySelector('.js-menu'),
  themeSwitcher: document.querySelector('#theme-switch-toggle'),
};

// Render Menu template
const markupMenu = menuTemplate(menuItems);
refs.menuList.insertAdjacentHTML('beforeend', markupMenu);

// Theme switcher
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.themeSwitcher.addEventListener('change', toggleTheme);

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  refs.body.removeAttribute('class');
  refs.body.classList.add(themeName);
}

function toggleTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    setTheme(Theme.LIGHT);
  } else {
    setTheme(Theme.DARK);
  }
}

function checkTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    setTheme(Theme.DARK);
    refs.themeSwitcher.checked = true;
  }
}

checkTheme();


// FIRST TRY

// const currentTheme = localStorage.getItem('theme');
// checkTheme();

// function checkTheme() {
//   if (currentTheme === 'dark-theme') {
//     refs.themeSwitcher.checked = true;
//     refs.body.classList.add(currentTheme);
//   }
// }

// refs.themeSwitcher.addEventListener('change', swithTheme);

// function swithTheme(event) {
//   event.preventDefault();

//   if (refs.themeSwitcher.checked) {
//     localStorage.setItem('theme', Theme.DARK);
//     refs.body.removeAttribute('class');
//     refs.body.classList.add(Theme.DARK);
//   }

//   if (!refs.themeSwitcher.checked) {
//     localStorage.setItem('theme', Theme.LIGHT);
//     refs.body.removeAttribute('class');
//     refs.body.classList.add(Theme.LIGHT);
//   }
// }
