$(function(){
	$(".scrollButton").click(function(event) {
		scrolling=true;
		$('html,body').animate({scrollTop: $("#"+$(this).attr("role")).offset().top},
			1000, function(){
				scrolling=false;
			});
	});

	$("#owl-example").owlCarousel({
		items : 3,
		autoPlay : 2500,
		navigation : true,
		navigationText : ["<",">"],
		rewindNav : true,
		slideSpeed : 2000,
		rewindSpeed : 2000,
		paginationSpeed : 2000,
		itemsDesktop : [1199,3]
	});
});