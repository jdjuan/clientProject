$(function(){
	$(".scrollButton").click(function(event) {
		scrolling=true;
		$('html,body').animate({
			scrollTop: $("#"+$(this).attr("role")).offset().top},
			1000, function(){
				scrolling=false;
			});
	});

});