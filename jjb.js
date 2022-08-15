


const mobileBtn = document.getElementById('mobliectr');
const nav = document.querySelector('nav');
const mobilebtnclose = document.getElementById('close_btn');


    mobileBtn.addEventListener('click', () => {
        nav.classList.add('menu_btn');

    });



    mobilebtnclose.addEventListener('click', () => {
        nav.classList.remove('menu_btn');

    });


