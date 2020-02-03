$('.mobile__btn').on('click' , function () {
      $('.mobile__btn').toggleClass('show__mobile__btn')
      $('.menu').toggleClass('show__menu')
});

$('.menu a').on('click' , function () {
      $('.mobile__btn').removeClass('show__mobile__btn')
      $('.menu').removeClass('show__menu')
});