import './style.css';

import renderContact from './contact';
import renderFooter from './footer';
import renderHeader from './header';
import renderMain from './main';
import renderMenu from './menu';
import renderNav from './nav';

const content = document.querySelector('#content');
content.appendChild(renderNav());
content.appendChild(renderHeader());
content.appendChild(renderMain());
content.appendChild(renderMenu());
content.appendChild(renderContact());
document.body.appendChild(renderFooter());

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');
const header = document.querySelector('header');
const main = document.querySelector('main');
const menuDiv = document.querySelector('.menuDiv');
const contactDiv = document.querySelector('.contactDiv');

home.addEventListener('click', () => {
  header.classList.remove('d-none');
  main.classList.remove('d-none');
  menuDiv.classList.remove('d-none');
  contactDiv.classList.remove('d-none');
});

menu.addEventListener('click', () => {
  header.classList.add('d-none');
  main.classList.add('d-none');
  menuDiv.classList.remove('d-none');
  contactDiv.classList.add('d-none');
});

contact.addEventListener('click', () => {
  header.classList.add('d-none');
  main.classList.add('d-none');
  menuDiv.classList.add('d-none');
  contactDiv.classList.remove('d-none');
});