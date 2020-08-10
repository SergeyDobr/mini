$(document).ready(function(){
    $('.mini__burger').on('click', function(){
        $('.mini__burger,.mini__menu').toggleClass('active');
    })

//
$('.mini__circle1').on('click', function(){
    $('header').css('background-image', 'url(./img/header/bg.png)');
})
$('.mini__circle2').on('click', function(){
    $('header').css('background-image', 'url(./img/header/bg2.jpg)');
})
$('.mini__circle3').on('click', function(){
    $('header').css('background-image', 'url(./img/header/bg3.jpg)');
})

});
