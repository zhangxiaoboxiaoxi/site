$(document).ready(function(){
	$("#menu-click").click(function(){
		$("#menu-total").toggleClass("none");
	});
	$("#lesson-bottom").click(function(){
		$(".menu-lesson").toggleClass("none");
		 $('#lesson-bottom').css('display','none');
	 	$('#lesson-top').css('display','block'); 
	});
	$("#lesson-top").click(function(){
		$(".menu-lesson").toggleClass("none");
		 $('#lesson-top').css('display','none');
	 	$('#lesson-bottom').css('display','block'); 
	});
	$("#works-bottom").click(function(){
		$(".menu-work").toggleClass("none");
		 $('#works-bottom').css('display','none');
	 	$('#works-top').css('display','block'); 
	});
	$("#works-top").click(function(){
		$(".menu-work").toggleClass("none");
		 $('#works-top').css('display','none');
	 	$('#works-bottom').css('display','block'); 
	});
	
	$("#star-bottom").click(function(){
		$(".menu-star").toggleClass("none");
		 $('#star-bottom').css('display','none');
	 	$('#star-top').css('display','block'); 
	});
	$("#star-top").click(function(){
		$(".menu-star").toggleClass("none");
		 $('#star-top').css('display','none');
	 	$('#star-bottom').css('display','block'); 
	});
	$("#job-bottom").click(function(){
		$(".menu-job").toggleClass("none");
		 $('#job-bottom').css('display','none');
	 	$('#job-top').css('display','block'); 
	});
	$("#job-top").click(function(){
		$(".menu-job").toggleClass("none");
		 $('#job-top').css('display','none');
	 	$('#job-bottom').css('display','block'); 
	});
	
	
});


