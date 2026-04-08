const closeBtn = document.querySelector(".topnav__close")
const navMenu = document.querySelector(".topnav__links")
const menuBtn = document.getElementById("menu-btn")


closeBtn.addEventListener('click', function(){
    navMenu.classList.toggle("open")
})

menuBtn.addEventListener('click', function(){
    navMenu.classList.toggle("open")
})