'use strict'
let preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
       preloader.classList.add('fade');
       setTimeout(function(){
           console.log('ifhvre')
           preloader.style.display = 'none';
       }, 1000);
    });

let card_img_top = document.querySelectorAll('.card-img-top');

let active = card_img_top[0].nextElementSibling;
active.classList.add('active');
for (let i = 0; i<card_img_top.length; i++) {
	card_img_top[i].addEventListener('click', function(){

		active.classList.remove('active')
		card_img_top[i].nextElementSibling.classList.toggle('active');
        active = card_img_top[i].nextElementSibling;
	});
}
$(document).ready(function(){
    $('.slider').slick({

      // setting-name: setting-value
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
    });
    $('.mob-menu').click(function(){
        $('.menu').stop().slideToggle();
    });
});



let name = document.querySelector('.name');
let email = document.querySelector('.email');
let button = document.querySelector('.form button');

button.onclick = function (p) {
    if (name.value.length == 0 ) {
        name.classList.add('myerror');
        p.preventDefault();
        console.log('error');
    }
    if (!(/^[a-zA-Z0-9_\.\-]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(email.value))) {
        email.classList.add('myerror');
        p.preventDefault();
    }

}




// let name = document.querySelector('.name');

// let im = new Inputmask("99-9999999");
// im.mask(.name);

// //or

// Inputmask({"mask": "(999) 999-9999"}).mask(name);
// Inputmask("9-a{1,3}9{1,3}").mask(name);
// Inputmask("9", { repeat: 10 }).mask(name);

// Inputmask({ regex: "\\d*" }).mask(name);
// Inputmask({ regex: String.raw`\d*` }).mask(name);