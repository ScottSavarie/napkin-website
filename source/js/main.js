
/* =Home specialty fade
============================================================================== */

$(document).ready(function() {
  $("#graphic-wrapper").addClass("show-phone");  
  $("#logo").addClass("show-logo");
  $("#intro-text").addClass("show-text");
  $("#primary-button").addClass("show-btn");

    
});

console.log("yoyo");




/* =Scrolling
============================================================================== */

map_range = function(value, low1, high1, low2, high2) {
 if (value < low1) { return low2; }
 else if (value > high1) { return high2; }
 else return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


var lastScrollTop = 0;

$(window).load(function(){

var layersWrapper = $(".layers-wrapper").offset().top;
var canvasWrapper = $(".canvas-wrapper").offset().top;
var controlsWrapper = $(".controls-wrapper").offset().top;

$(window).scroll(function(event) {
  var scrollTop = $(document).scrollTop();
  console.log(scrollTop);



  	// Remove invisible class if scrolling down 
	if(window.innerWidth >= 960 && scrollTop > lastScrollTop){
		$("#layers-graphic").removeClass("invisible");
		$("#canvas-graphic").removeClass("invisible");
		$("#controls-graphic").removeClass("invisible");
	}

  	// Layers behavior
    if (window.innerWidth >= 960 && scrollTop >= layersWrapper - 300){
	    $(".layers-graphic").css({opacity : map_range(scrollTop, layersWrapper - 300, layersWrapper - 100, 0, 1)});
	    $(".layers-graphic").css({transform : "scale" + "(" + map_range(scrollTop, layersWrapper - 300, layersWrapper - 100, 0.75, 1) + ")"});
	    $(".layers-text").css({opacity : map_range(scrollTop, layersWrapper - 300, layersWrapper - 100, 0, 1)});
    }


    if (window.innerWidth >= 960 && scrollTop >= layersWrapper + 100){
	    $(".layers-graphic").css({transform : "translateX" + "(" + map_range(scrollTop, layersWrapper + 100, layersWrapper + 300, 0, -500) + "px)"});
	    $(".layers-graphic").css({opacity : map_range(scrollTop, layersWrapper + 100, layersWrapper + 300, 1, 0)});
    }

    // Canvas behavior
    if (window.innerWidth >= 960 && scrollTop >= canvasWrapper - 300){
	    $(".canvas-graphic").css({opacity : map_range(scrollTop, canvasWrapper - 300, canvasWrapper - 100, 0, 1)});
	    $(".canvas-graphic").css({transform : "scale" + "(" + map_range(scrollTop, canvasWrapper - 300, canvasWrapper - 100, 0.75, 1) + ")"});
	    $(".canvas-text").css({opacity : map_range(scrollTop, canvasWrapper - 300, canvasWrapper - 100, 0, 1)});

    }


    if (window.innerWidth >= 960 && scrollTop >= canvasWrapper + 100){
	    $(".canvas-graphic").css({transform : "translateX" + "(" + map_range(scrollTop, canvasWrapper + 100, canvasWrapper + 300, 0, -500) + "px)"});
	    $(".canvas-graphic").css({opacity : map_range(scrollTop, canvasWrapper + 100, canvasWrapper + 300, 1, 0)});
    }


 	// Controls behavior

    if (window.innerWidth >= 960 && scrollTop >= controlsWrapper - 400){
	    $(".controls-graphic").css({opacity : map_range(scrollTop, controlsWrapper - 400, controlsWrapper - 300, 0, 1)});
	    $(".controls-graphic").css({transform : "scale" + "(" + map_range(scrollTop, controlsWrapper - 400, controlsWrapper - 300, 0.75, 1) + ")"});
	    $(".controls-text").css({opacity : map_range(scrollTop, controlsWrapper - 400, controlsWrapper - 300, 0, 1)});

    }

    if (window.innerWidth >= 960 && scrollTop >= controlsWrapper +100 ){
	    $(".controls-graphic").css({transform : "translateY" + "(" + map_range(scrollTop, controlsWrapper + 100 , controlsWrapper + 400, 0, -300) + "px)"});
    }


    // If scrolling to top add invisible class 
    if(window.innerWidth >= 960 && scrollTop < lastScrollTop && scrollTop <= 500){
    	console.log("less than 500");
    	$("#layers-graphic").removeAttr('style');
    	$("#layers-graphic").addClass("invisible");  

    	$("#canvas-graphic").removeAttr('style');
    	$("#canvas-graphic").addClass("invisible");  

    	$("#controls-graphic").removeAttr('style');
    	$("#controls-graphic").addClass("invisible");  	
    }

    else {
    }

    // update last scroll position
    lastScrollTop = scrollTop;
	

	});

});




// Add or remove styles on resize

$( window ).resize(function() {
	var layersWrapper = $(".layers-wrapper").offset().top;
	var canvasWrapper = $(".canvas-wrapper").offset().top;
	var controlsWrapper = $(".controls-wrapper").offset().top;
	var scrollTop = $(document).scrollTop();

  if(window.innerWidth < 960){
  	 $(".layers-graphic").removeAttr( 'style' );
  	 $(".layers-text").removeAttr( 'style' );
  	 $(".canvas-graphic").removeAttr( 'style' );
  	 $(".canvas-text").removeAttr( 'style' );
  	 $(".controls-graphic").removeAttr( 'style' );
  	 $(".controls-text").removeAttr( 'style' );
  }

  	// Layers behavior
    if (window.innerWidth >= 960 && scrollTop >= layersWrapper - 300){
	    $(".layers-graphic").css({opacity : map_range(scrollTop, layersWrapper - 300, layersWrapper - 100, 0, 1)});
	    $(".layers-graphic").css({transform : "scale" + "(" + map_range(scrollTop, layersWrapper - 300, layersWrapper - 100, 0.75, 1) + ")"});
	    $(".layers-text").css({opacity : map_range(scrollTop, layersWrapper - 300, layersWrapper - 100, 0, 1)});

    }


    if (window.innerWidth >= 960 && scrollTop >= layersWrapper + 100){
	    $(".layers-graphic").css({transform : "translateX" + "(" + map_range(scrollTop, layersWrapper + 100, layersWrapper + 300, 0, -500) + "px)"});
	    $(".layers-graphic").css({opacity : map_range(scrollTop, layersWrapper + 100, layersWrapper + 300, 1, 0)});
    }





    // Canvas behavior

    if (window.innerWidth >= 960 && scrollTop >= canvasWrapper - 300){
	    $(".canvas-graphic").css({opacity : map_range(scrollTop, canvasWrapper - 300, canvasWrapper - 100, 0, 1)});
	    $(".canvas-graphic").css({transform : "scale" + "(" + map_range(scrollTop, canvasWrapper - 300, canvasWrapper - 100, 0.75, 1) + ")"});
	    $(".canvas-text").css({opacity : map_range(scrollTop, canvasWrapper - 300, canvasWrapper - 100, 0, 1)});

    }


    if (window.innerWidth >= 960 && scrollTop >= canvasWrapper + 100){
	    $(".canvas-graphic").css({transform : "translateX" + "(" + map_range(scrollTop, canvasWrapper + 100, canvasWrapper + 300, 0, -500) + "px)"});
	    $(".canvas-graphic").css({opacity : map_range(scrollTop, canvasWrapper + 100, canvasWrapper + 300, 1, 0)});
    }



 	// Controls behavior

    if (window.innerWidth >= 960 && scrollTop >= controlsWrapper - 400){
	    $(".controls-graphic").css({opacity : map_range(scrollTop, controlsWrapper - 400, controlsWrapper - 300, 0, 1)});
	    $(".controls-graphic").css({transform : "scale" + "(" + map_range(scrollTop, controlsWrapper - 400, controlsWrapper - 300, 0.75, 1) + ")"});
	    $(".controls-text").css({opacity : map_range(scrollTop, controlsWrapper - 400, controlsWrapper - 300, 0, 1)});

    }

    if (window.innerWidth >= 960 && scrollTop >= controlsWrapper +100 ){
	    $(".controls-graphic").css({transform : "translateY" + "(" + map_range(scrollTop, controlsWrapper + 100 , controlsWrapper + 400, 0, -300) + "px)"});
    }


    else {
      
    }





});

