let hamburger = document.getElementById("hamburger");
let isOpen = false;

hamburger.addEventListener('click', function(e) {
    let menu = document.getElementById('menu');
    isOpen = isOpen ? false : true;
    isOpen ? menu.style.width = '300px' :
        menu.style.width = '0';

})