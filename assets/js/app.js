
window.addEventListener('scroll', function() {

    let idButton = document.querySelector('header');
    let mouse = document.getElementById('container-mouse');
    let domTop = document.documentElement.scrollTop;
    
    if (domTop > 100) {
        idButton.classList.add('header-scroll');
        mouse.style.opacity = 0;
        mouse.style.transition = '0.25s';
    }
    else {
        idButton.classList.remove('header-scroll');
        mouse.style.opacity = 1;
        mouse.style.transition = '0.25s';
    }
});





let idButtonopen = document.getElementById("burger");
let idButtonclose = document.querySelectorAll('.closeburger');

idButtonopen.addEventListener("click", function() {
    openclosemenu() 
})
idButtonclose[0].addEventListener("click", function() {
    openclosemenu() 
})
idButtonclose[1].addEventListener("click", function() {
    openclosemenu() 
})

function openclosemenu() {
    let burgeractive = document.getElementById("burger");
    burgeractive.classList.toggle("style-click");

    let menuactive = document.getElementById("menu_burger");
    menuactive.classList.toggle("open_menu"); 
}