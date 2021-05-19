import './style.css'
import HeaderImage from './images/background.jpg'

const content = document.querySelector('#content')

// navbar navbar-dark bg-dark d-flex justify-content-center"
const navbar = document.createElement('nav')
navbar.classList.add("navbar", "navbar-dark", "bg-dark", "d-flex", "justify-content-center")
navbar.innerHTML = `
<ul class="navbar-nav flex-row">
  <li class="nav-item mx-3"> <a class='home nav-link hvr-pulse' href="#">Home</a> </li>
  <li class="nav-item mx-3"> <a class='menu nav-link hvr-pulse' href="#">Menu</a> </li>
  <li class="nav-item mx-3"> <a class='contact nav-link hvr-pulse' href="#">Contact</a> </li>
</ul>`
content.appendChild(navbar)

const header = document.createElement('header')
content.appendChild(header)

const headerImage = new Image()
headerImage.src = HeaderImage
headerImage.classList.add('header-image')
header.appendChild(headerImage)

const headerTextDiv = document.createElement('div')
headerTextDiv.classList.add('header-text-div')
header.appendChild(headerTextDiv)

const headerText = document.createElement('h1')
headerText.classList.add('header-text')
headerText.innerHTML = 'CaszNights'
headerTextDiv.appendChild(headerText)