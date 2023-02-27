// Бургер меню

let burgerBtn = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.burger__block'),
    burgerClose = document.querySelectorAll('.burger__btn'),
    burgerLink = document.querySelectorAll('.burger__block-list');

// меняем крестик

    function showMenu() {
        burgerMenu.style.left = burgerMenu.style.left == '0px' ? '-75%' : '0px';
        burgerClose[0].style.transform = burgerClose[0].style.transform == 'translateY(2px) rotate(-45deg)' ? 'translateY(0px) rotate(0deg)' : 'translateY(2px) rotate(-45deg)';
        burgerClose[0].style.width = burgerClose[0].style.width == '25px' ? '20px' : '25px';
        burgerClose[1].style.display = burgerClose[1].style.display == 'none' ? 'block' : 'none'; 
        burgerClose[2].style.transform = burgerClose[2].style.transform == 'translateY(0px) rotate(45deg)' ? 'translateY(0px) rotate(0deg)' : 'translateY(0px) rotate(45deg)';
        burgerClose[2].style.width = burgerClose[2].style.width == '25px' ? '20px' : '25px';
    }


    burgerBtn.addEventListener('click', showMenu);

    burgerLink.forEach(i => {
        i.addEventListener ('click', showMenu);
    });