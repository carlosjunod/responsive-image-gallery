var el = document.querySelector('.js-animation');
var objetives = document.querySelectorAll('.photo');
var button = document.querySelector('.button');
var galleryList =  document.querySelector('#gallery ul')

el.addEventListener('click', (el)=>{
    objetives.forEach((obj) => {
        if (obj.classList.contains('animate') && obj.classList.contains('normal')) {
            obj.classList.remove('animate');
            obj.classList.remove('normal');
        }

        if (obj.classList.contains('animate')) {
            obj.className += ' normal';
        } else {
            obj.className += ' animate';
        }
    })
});
