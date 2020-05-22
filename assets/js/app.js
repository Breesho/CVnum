
window.addEventListener('scroll', function() {

    let idButton = document.querySelector('header');
    let mouse = document.getElementById('container-mouse');
    let domTop = document.documentElement.scrollTop;
    
    if (domTop > 200) {
        idButton.classList.add('header-scroll');
        mouse.style.opacity = 0;
        mouse.style.transition = '0.5s';
    }
    else {
        idButton.classList.remove('header-scroll');
        mouse.style.opacity = 1;
        mouse.style.transition = '0.5s';
    }
});



let idButton = document.getElementById("burger");

idButton.addEventListener("click", function() {
    let burgeractive = document.getElementById("burger");
    burgeractive.classList.toggle("style-click");

    let menuactive = document.getElementById("menu_burger");
    menuactive.classList.toggle("open_menu"); 
})

    