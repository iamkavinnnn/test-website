console.log("hello world");
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.list-fade');

btnHamburger.addEventListener('click', function(){
    console.log('open hamburger');

    if(header.classList.contains('open')) {
        header.classList.remove('open');
        fadeElements.forEach( (element) => {
            element.classList.add('fade-out');
            element.classList.remove('fade-in');                
        });
    } else {
        header.classList.add('open');
        fadeElements.forEach( (element) => {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');                
        });
    }
});