$(document).ready(function(){

	$('.navi').click(function(){
		$('.menu-top > ul').css('display','block');
		$('.navi').hide();
		$('.navi-x').show();
	});
	$('.navi-x').click(function(){
		$('.menu-top ul').css('display','none');
		$('.navi-x').hide();
		$('.navi').show();
	});



//	$('.li_sub').click(function(){
//		$('.menu-top ul li ul').css('display','none');
//	});

});