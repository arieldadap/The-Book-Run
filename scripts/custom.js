
$(document).ready(function(){
	

	$('#menu-one').click(function(){ 	$('.menu-one').fadeIn(200);		$('.menu-two, .menu-three, .menu-four, .menu-five').fadeOut(100); return false; });
	$('#menu-two').click(function(){ 	$('.menu-two').fadeIn(200);		$('.menu-one, .menu-three, .menu-four, .menu-five').fadeOut(100); return false; });
	$('#menu-three').click(function(){ 	$('.menu-three').fadeIn(200);	$('.menu-two, .menu-one, .menu-four, .menu-five').fadeOut(100);   return false; });
	$('#menu-four').click(function(){ 	$('.menu-four').fadeIn(200);	$('.menu-two, .menu-three, .menu-one, .menu-five').fadeOut(100);  return false; });
	$('#menu-five').click(function(){ 	$('.menu-five').fadeIn(200);	$('.menu-two, .menu-three, .menu-four, .menu-one').fadeOut(100);  return false; });
	
	$('.closer-submenu').click(function(){
		$(this).parent().fadeOut(200);
		return false;
	});
			

});

