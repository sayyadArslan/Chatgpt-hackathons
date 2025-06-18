console.log('Js is Working');
const nav = document.getElementById('navbar');
const menu = document.getElementById('menu');
const link = document.getElementById('link');
const btn = document.getElementById('nav-btn');
let a = 0;
console.log(menu);

menu.addEventListener('click', () =>
{
    if (a == 0) {
        menu.src = 'close.png';
        link.style.display = "flex";
        btn.style.display = "block";
        nav.style.flexDirection = "Column";
        nav.style.gap = "20px";
        link.style.flexDirection = "Column";
        a++;
    }
    else {
        menu.src = 'menu.png';
        link.style.display = "none";
        btn.style.display = "none";
        nav.style.flexDirection = "row";
   
        a = 0;
    }

});


