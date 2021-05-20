import './style.css'
import renderNav from './nav'
import renderHeader from './header'
import renderMain from './main'
import renderMenu from './menu'
import renderContact from './contact'
import renderFooter from './footer'

const content = document.querySelector('#content');
content.appendChild(renderNav())
content.appendChild(renderHeader())
content.appendChild(renderMain())
content.appendChild(renderMenu())
content.appendChild(renderContact())
content.appendChild(renderFooter())