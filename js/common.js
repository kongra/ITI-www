// JavaScript Document
function scrollPageVertical(){
  var elementClicked = $(this).attr("href");
  var destination = $(elementClicked).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination// - 10
  }, 1000 );
  return false;
}

$(document).ready(
  function(){
    $(".target").click(scrollPageVertical);

    $('nav a.target').click(function(){
      $('nav a.target').removeClass('active');
      $(this).addClass('active');
    });

    $(".scroll").mCustomScrollbar();

    $('.item .link').click(function(){
      $('.pop').css({'display':'none'});
      $('.close-pop').css({'display':'block'});
      var target = $(this).parent();
      if($(target).hasClass('i1')) $('.pop.c-1').css({'display':'block'});
      if($(target).hasClass('i2')) $('.pop.c-2').css({'display':'block'});
      if($(target).hasClass('i3')) $('.pop.c-3').css({'display':'block'});
      if($(target).hasClass('i4')) $('.pop.c-4').css({'display':'block'});
      if($(target).hasClass('i5')) $('.pop.c-5').css({'display':'block'});
      if($(target).hasClass('i6')) $('.pop.c-6').css({'display':'block'});
      if($(target).hasClass('i7')) $('.pop.c-7').css({'display':'block'});
    });
    $('.close-pop').click(function(){$('.pop, .close-pop').css({'display':'none'});});
  });
