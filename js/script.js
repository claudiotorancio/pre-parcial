
const botonMenu = document.querySelector('.btn-menu-i');
const menuMobile = document.getElementById('menu-mobile');


//manejar el evento click
document.addEventListener('click', (e) => {

    if (e.target === botonMenu) {
        e.preventDefault();
        return menuMobile.classList.toggle('open')
    }
    menuMobile.classList.remove('open');
});

//manejar el evento scroll para cierre de menu
document.addEventListener('scroll', () => {
    menuMobile.classList.remove('open');
});