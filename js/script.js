// Navigation

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

// Split Screen in About section
$(document).ready (function() {
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '300%',
        triggerElement: '.about-title',
        triggerHook: 0
    })
    .setPin('.about-title')
    // .addIndicators()
    .addTo(controller);
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
var formContainer = $('#form-container');

bindFormClick();
//Opening the form
function bindFormClick() {
    $(formContainer).on('click', function (e) {
        e.preventDefault();
        // toggleForm();
        //Ensure container doesn't togleForm when open
        $(this).off();
    });
}

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

//Form validation
$('form').submit(function () {
    var form = $(this);
    form.find('.form-error').removeClass('form-error');
    var formError = false;

    form.find('.input').each(function () {
        if ($(this).val() == '') {
            $(this).addClass('form-error');
            $(this).select();
            formError = true;
            return false;
        } else if ($(this).hasClass('email') && !isValidEmail($(this).val())) {
            $(this).addClass('form-error');
            $(this).select();
            formError = true;
            return false;
        }
    });

    if (!formError) {
        $('body').addClass('form-submitted');
        $('#form-head').addClass('form-submitted');
        setTimeout(function () {
            $(form).trigger("reset");
        }, 1000);
    }
    return true;
});

function isValidEmail(email) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(email);
};

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