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

$('.product-slider').slick({
    arrows: false,
    infinite: false,
    variableWidth: true,
    focusOnSelect: true,
    // centerMode: true
})

$('.product-gallery-container').slick({
    slidesToShow: 4,
    centerMode: true,
})

var curUrl;
$('.product-gallery-image').on('click', function(){
    curUrl = $(this).find('img').attr('src');
    // console.log(curUrl);
    $('.product-big-image').find('img').attr('src', curUrl);
})

$('#indexSlide  .absolute-center').addClass('active');

console.log('asd');

$('.product-container .product-module').each(function(i){
    console.log(i);
    $(this).addClass('active');
    $(this).css({
        transition: 'all 0.5s ease '+i/5+'s'
    });
});



function food(){
    $('.food').each(function(i){
        $(this).css({
            transition: 'all 0.5s ease '+i/10+'s'
        });
        $(this).addClass('active');
    });
    $('.resep-module').each(function(i){
        $(this).css({
            transition: 'all 0.5s ease '+i/10+'s'
        });
        $(this).addClass('active');
    });
}
food();
// setTimeout(food(), 1000);
