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
			});
			$('.close-pop').click(function(){$('.pop, .close-pop').css({'display':'none'});});
		/*$(".menu a.item").click(scrollPageVertical);
		$(".link.slide").click(scrollPageVertical);*/
		/*windowSize();
		$(".logos").hover(
			(function(){$(this).find(".desc").fadeIn();}),
			(function(){$(this).find(".desc").fadeOut();})
			);*/
			
		//var ww = $(window).width();
		//alert(ww);
			//$('.fancybox').fancybox();
});/*ready end*/

/*$(window).resize(function() {windowSize();})
	
function windowSize(){
		var ww = $(window).width();
		if( ww < 1000 && ww > 950){
			$(".content-holder").addClass("hidden");
			}
		else{
			$(".content-holder").removeClass("hidden");
			}
		//alert(ww);
	}*/
// Menu small
/*$(window).scroll(function(){
	if($(document).scrollTop() > 660){
		$(".menu-s").css("position","fixed");
		$(".menu-s").css("top",120);
	}
	else{
		$(".menu-s").css("position","absolute");
		$(".menu-s").css("top","660px");
	}
});*/
// Menu Small /end
/*$(function(){
      $("#myScroll").mbScrollable({
        width:220,
        elementsInPage:1,
        elementMargin:0,
        shadow:"#999 2px 2px 2px",
        height:"auto",//220, 
        controls:"#controls",
        slideTimer:600,
        autoscroll:true,
        scrollTimer:4000,
				changePageCallback:function(){
					var positiondisplay= $('#myScroll').get(0).idx+'/'+$('#myScroll').get(0).totalPages;
					$('#controls .positiondisplay').html(positiondisplay);
				},
				loadCallback:function(){
					var positiondisplay= $('#myScroll').get(0).idx+'/'+$('#myScroll').get(0).totalPages;
					$('#controls .positiondisplay').html(positiondisplay);
				}
      });
      setTimeout(function(){$("#wrapper").fadeIn();},2000);
    })*/