

	$(document).ready(function() {
  jQuery(document).ready(function(){
    $(".dropdown").hover(
      function() { $('.dropdown-menu', this).stop().fadeIn("slow");
        },
      function() { $('.dropdown-menu', this).stop().fadeOut("slow");
    });
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 30) {
	    $("#nav").css("background" , "white");
	    
	     $("#nav li a").css("color" , "black"); 
	     $(".navbar-brand").css("color" , "slateblue"); 
	     $("#indicator").css("background" ,"slateblue"); 
	  }

	  else{
		  $("#nav").css("background" , "transparent");  	
		   $(".nav-item").css("color" , "white"); 	
		   $("#brand").css("color" , "cadetblue"); 	
	  }
  })
});

$(document).ready(function(){

	$('.slider').bxSlider({
		slideWidth:592.5,
		slideHeight:400,
		auto:true,
		minSlides:4,
		maxSlides:3,
		slideMargin:50
	});
})