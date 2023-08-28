/*===== Toggle do Menu Lateral =====*/ 

const btnMenu = document.getElementById("btn-menu");

if(btnMenu != null) {
    btnMenu.addEventListener('click', toggleMenu);
}

function toggleMenu() {
    const menu = document.getElementById("menu-lateral");
    const menuSuperior = document.getElementById("menu-superior");
    const corpoSite = document.getElementById("corpo-site");

    // Mostra o Menu lateral
    if (menu != null) {
        menu.classList.toggle('show')
    }

    // Muda o ícone do botão
    if(btnMenu != null) {
        btnMenu.classList.toggle('bx-x')
    }

    // Movimenta o menu Superior
    if(menuSuperior != null) {
        menuSuperior.classList.toggle('body-pd')
    }

    // Movimenta o corpo do site
    if(corpoSite != null) {
        corpoSite.classList.toggle('body-pd')
    }
}
/*===== Adiciona Ativo do momento =====*/ 
const navLista = document.querySelectorAll('.nav-lista')

function colorLink(){
    if(navLista){
        navLista.forEach(l=> l.classList.remove('ativo'))
        this.classList.add('ativo')
    }
}
navLista.forEach(l=> l.addEventListener('click', colorLink))