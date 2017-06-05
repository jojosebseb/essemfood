$('#indexSlide > .slide-parent').slick({
    arrows: false,
})

$('#aboutSlide > .slide-parent').slick({
    arrows: false,
})

$('.mobile-handle').on('click', function(){
    $('.nav-ul').toggleClass('active');
    $(this).toggleClass('active');
})
