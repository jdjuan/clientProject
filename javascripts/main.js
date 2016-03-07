$(function(){
	// Scroll Buttons assigned function
	$(".scrollButton").click(function(event) {
		animateScroll($(this).attr("role"));
	});

	// jQuery Function to make the actual scrolling
	function animateScroll(elementClass){
		$('html,body').animate({scrollTop: $("#"+elementClass).offset().top},
			1000, function(){
				setTimeout(function(){
					scrolling=false;
				}, 50);
			});
	}

	// Clients carousel using external lib
	$("#owl-example").owlCarousel({
		items : 3,
		// autoPlay : 2500,
		navigation : true,
		navigationText : ["<",">"],
		rewindNav : true,
		slideSpeed : 2000,
		rewindSpeed : 2000,
		paginationSpeed : 2000,
		itemsDesktop : [1199,3]
	});
});

// Google Maps initialization function
function initMap() {
	var myCenter=new google.maps.LatLng(51.524293, -0.073912);
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
		center: myCenter,
		zoom: 16
	});
	map.set("styles",[{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]);

	var marker=new google.maps.Marker({
		position:myCenter,
		icon:'images/marker.png'
	});
	marker.setMap(map);
	var infowindow = new google.maps.InfoWindow({
		content:"Geek Label<br> 4th Floor, 27-33 Benthnal Green Road<br>Shoreditch, London, E1 6LA",
		anchorPoint : myCenter
	});
	infowindow.open(map,marker);
}