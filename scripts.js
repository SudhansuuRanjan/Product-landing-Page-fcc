const menu = document.querySelector(".fa-bars");
const menuTray = document.querySelector(".mobile-head");
menu.addEventListener('click', ()=>{
    menuTray.classList.toggle('visible');
})
