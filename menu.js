const iconMenu = document.getElementById('icon-menu');// detecta el clic
const mainMenu = document.getElementById('main-menu');//agrgar o quitar la clase 

iconMenu.addEventListener('click',()=>mainMenu.classList.toggle('menu--show'));


