$(document).ready(function(){
	if($('html').css("direction") == 'ltr'){

		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			responsiveClass:true,
			nav:true,
			dots: false,
			navText: ["<i class='fas fa-arrow-circle-left fa-2x'></i>", "<i class='fas fa-arrow-circle-right fa-2x'></i>"],
			responsive:{
				0:{
					items:1,
					loop:false
	
				},
				600:{
					items:3,
					loop:false
	
				},
				1000:{
					items:4,
					loop:false
				}
			}
		})
	}else if ($('html').css("direction") == 'rtl'){
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			responsiveClass:true,
			nav:true,
			dots: false,
			rtl: true,
			navText: ["<i class='fas fa-arrow-circle-right fa-2x'></i>","<i class='fas fa-arrow-circle-left fa-2x'></i>"],
			responsive:{
				0:{
					items:1,
					loop:false
	
				},
				600:{
					items:3,
					loop:false
	
				},
				1000:{
					items:4,
					loop:false
				}
			}
		})
	}
  });
$(document).ready(function () {
	$(".down").click(function () {
		$("#location").slideToggle("linear");
	});
	
	$(".language").click(function () {
		$("#toggler").slideToggle("linear");
	});

	$("#bar").click(function () {
		if($(".section-1").css('left') == '-513px'){

			$(".section-1").animate({left: '0'}, 1000);
		}else if($(".section-1").css('right') == '-513px') {
			$(".section-1").animate({right: '0'}, 1000);

		}
	});
	$("#bar-return").click(function () {
		if($(".section-1").css('left') == '0px'){

			$(".section-1").animate({left: '-513px'}, 1000);
		}else if($(".section-1").css('right') == '0px') {
			$(".section-1").animate({right: '-513px'}, 1000);

		}
	});
	$('.close').click(function(){
		$(this).parent().parent().hide();
	  });
	$('#signUp').click(function(){
		$('.signIn').hide();
		$('.signUp').css('display', 'flex');
	});
	$('#signIn, #button-signIn ,#cartlogin').click(function(){
		$('.signIn').css('display', 'flex');
		$('.signUp').hide();
	
	});
	$('.owl-item').hover(function(){
		$(this).find('p').fadeToggle("slow");
	})
	$('.view-all').click(function(){
		if($(this).parent().siblings('.other-audio').css('overflow-y') == 'scroll'){
			$(this).parent().siblings('.other-audio').css({
				'overflow-y': 'hidden'
			})
			$(this).text('View All');			
		}else{
			$(this).parent().siblings('.other-audio').css({
				'overflow-y': 'scroll'
			})
			$(this).text('View Less');
		}
	})
	
});
function setPlayer(event, src, name){
	var audio = event.target.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.querySelector("#playAudio");
	audio.setAttribute("src", src);
	audio.play();
	event.target.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.querySelector("#nameSurat").innerHTML = name;

}
// });