// Navigation
window.onload = function () {
    let myPorfile = document.getElementById('obj').contentDocument;
    let timeLineAnimation = gsap.timeline();
    let dots = myPorfile.getElementsByClassName('randomCircle');
    let letterM = myPorfile.getElementById('vmPath');
    
    let theColor = gsap.utils.random(['#ff6e40','#ffa476','#ffffa6','#cc41ff','peachpuff'],true);
let colorList = ['#cf9a41','#f0b99a','#cc313d','#f7c5cc','#f599be','violet','gold'];

    gsap.set(letterM, {
        transformOrigin: "center center",
            opacity:0,
            x:20,
            fill:"#000"
        }); 
        
        gsap.to(letterM,{
            x:0,
            y:0,
            fill:"#F2BB88",
            opacity: 1,
            duration: 2,
            delay:4,
            ease:"linear",
    
    })

timeLineAnimation.set(dots,{
fill: gsap.utils.wrap(colorList),

attr:{
    r: 'random(4,30)'

},
scale:0,
x:'random(100, 800)',
y: 'random(200,700)'

})

timeLineAnimation.to(dots,{
                    scale:1,
                    repeat:-1,
                    ease:"smooth",
                    duration:6,
                    yoyo:true
    
})

}

$(window).scroll(function () {

    if ($(window).scrollTop() > 300) {
        $('.main_nav').addClass('sticky');
        $('#pagination').show();
        $('.wrap2').show();
    } else {
        $('.main_nav').removeClass('sticky');
        $('#pagination').hide();
        $('.wrap2').hide();
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function () {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.main_nav').removeClass('open-nav');
    } else {
        $('.main_nav').addClass('open-nav');
    }
});

$('.main_nav li a').click(function () {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});

// Smooth Scrolling

jQuery(document).ready(function ($) {

    $('.smoothscroll').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });

});

// Intro typing effect
const TypingText = document.querySelector(".typed-text");
const AutoTyping = document.querySelector(".TypeCursor");

// const textArray = ["to my website...", "to my home page...", "to my web page...", "aaaargh!", "!!!"];
const textArray = ["Hi! My name is Varun Malhotra","Welcome to my Portfolio"];
const typingDelay = 90;
const erasingDelay = 50;
const newTextDelay = 600;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!AutoTyping.classList.contains("typing")) AutoTyping.classList.add("typing");
        TypingText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        AutoTyping.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!AutoTyping.classList.contains("typing")) AutoTyping.classList.add("typing");
        TypingText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        AutoTyping.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});




// pagination
function pagination() {

    var offset = $(document).scrollTop();
    var windowHeight = $(window).height();
    var $body = $('body');

    switch (true) {
        case (offset > (windowHeight * 6.75)):
            $body.removeClass().addClass('contact');
            break;
        case (offset > (windowHeight * 5.75)):
            $body.removeClass().addClass('portfolio');
            break;
        case (offset > (windowHeight * 4.75)):
            $body.removeClass().addClass('skills');
            break;
        case (offset > (windowHeight * .75)):
            $body.removeClass().addClass('about');
            break;
        default:
            $body.removeClass().addClass('header');
    }
}

pagination();

$(document).on('scroll', pagination);

$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});



//*****  Contact form  *****//


//Closing the form
$('#form-close, .form-overlay').click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    toggleForm();
    bindFormClick();
});

function toggleForm() {
    $(formContainer).toggleClass('expand');
    $(formContainer).children().toggleClass('expand');
    $('body').toggleClass('show-form-overlay');
    $('.form-submitted').removeClass('form-submitted');
}




//***  Contact card  ***//
var btn = document.querySelector('.button');
var buttonWrapper = document.querySelectorAll('.button-wrapper');

btn.addEventListener('click', function () {

    if (btn.classList.contains('animation')) {
        btn.classList.remove('animation');
    } else {
        btn.classList.add('animation');
    }

    for (i = 0; i < buttonWrapper.length; i++) {
        if (buttonWrapper[i].classList.contains('animation')) {
            buttonWrapper[i].classList.remove('animation');
        } else {
            buttonWrapper[i].classList.add('animation');
        }
    }

});

