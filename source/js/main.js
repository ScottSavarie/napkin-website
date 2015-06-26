
/* =Home specialty fade
============================================================================== */

$(document).ready(function() {
  $("#graphic-wrapper").addClass("show-phone");  
  $("#logo").addClass("show-logo");
  $("#intro-text").addClass("show-text");
  $("#primary-button").addClass("show-btn");    
});

console.log("yoyo");




/* = On Arrow Click
============================================================================== */

$( ".arrow" ).click(function() {
  $(".arrow").addClass("invisible");
	$('html,body').animate({scrollTop: $(this).offset().top + 130}, 600);
});




/* =Scrolling and hiding arrow
============================================================================== */

map_range = function(value, low1, high1, low2, high2) {
 if (value < low1) { return low2; }
 else if (value > high1) { return high2; }
 else return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


var lastScrollTop = 0;

var layersWrapper = 0;
var canvasWrapper = 0;
var controlsWrapper = 0;

var layersWrapperHeight = 0;
var canvasWrapperHeight = 0;
var controlsWrapperHeight = 0;


$(window).load(function(){

	var layersGraphicHeight = $("#layers-graphic").height();
	var canvasGraphicHeight = $("#canvas-graphic").height();
	var controlsGraphicHeight = $("#controls-graphic").height();


	// update wrapper min heights and top positions of graphics
	if(window.innerWidth >= 960){
		$("#layers-graphic").css({"top": (window.innerHeight / 2) - (layersGraphicHeight / 2) + 15 + "px" });
		$("#canvas-graphic").css({"top": (window.innerHeight / 2) - (canvasGraphicHeight / 2) + 15 + "px" });
		$("#controls-graphic").css({"top": (window.innerHeight / 2) - (controlsGraphicHeight / 2) + 15 + "px" });
	}

	// get wrapper positions and heights
	layersWrapper = $(".layers-wrapper").offset().top;
	canvasWrapper = $(".canvas-wrapper").offset().top;
	controlsWrapper = $(".controls-wrapper").offset().top;

	layersWrapperHeight = $(".layers-wrapper").height();
	canvasWrapperHeight = $(".canvas-wrapper").height();
	controlsWrapperHeight = $(".controls-wrapper").height();

	// on Scroll
	$(window).scroll(function(event) {
		var scrollTop = $(document).scrollTop();
		console.log("scroll:" + scrollTop);
		console.log("canvas:" + canvasWrapper);
		console.log("canvasH:" + canvasWrapperHeight);
		console.log("distance:" + (canvasWrapper - scrollTop));
		console.log("middle:" + (canvasWrapper - scrollTop + (layersWrapperHeight /2)));

		// Hide Arrow
		$(".arrow").addClass("invisible");


		// Set again reposition after scrolled back to top
		if(window.innerWidth >= 960){
			$("#layers-graphic").css({"top": (window.innerHeight / 2) - (layersGraphicHeight / 2) + 15 + "px" });
			$("#canvas-graphic").css({"top": (window.innerHeight / 2) - (canvasGraphicHeight / 2) + 15 + "px" });
			$("#controls-graphic").css({"top": (window.innerHeight / 2) - (controlsGraphicHeight / 2) + 15 + "px" });
		}

	  	// Remove invisible class if scrolling down 
		if(window.innerWidth >= 960 && scrollTop > lastScrollTop){
			$("#layers-graphic").removeClass("invisible");
			$("#canvas-graphic").removeClass("invisible");
			$("#controls-graphic").removeClass("invisible");
		}

	  	// Layers behavior
	    if (window.innerWidth >= 960 && scrollTop >= layersWrapper / 2){
		    $(".layers-graphic").css({opacity : map_range(scrollTop, layersWrapper - layersWrapperHeight / 2, layersWrapper , 0, 1)});
		    $(".layers-graphic").css({transform : "scale" + "(" + map_range(scrollTop, layersWrapper - layersWrapperHeight / 2, layersWrapper , 0.75, 1) + ")"});
		    $(".layers-text").css({opacity : map_range(scrollTop, layersWrapper - layersWrapperHeight / 2, layersWrapper , 0, 1)});
	    }


	    if (window.innerWidth >= 960 && scrollTop >= layersWrapper + 100){
		    $(".layers-graphic").css({transform : "translateX" + "(" + map_range(scrollTop, layersWrapper + 100, layersWrapper + 300, 0, -500) + "px)"});
		    $(".layers-graphic").css({opacity : map_range(scrollTop, layersWrapper + 100, layersWrapper + 300, 1, 0)});
	    }

	    // Canvas behavior
	    if (window.innerWidth >= 960 && scrollTop >= canvasWrapper  / 2){
		    $(".canvas-graphic").css({opacity : map_range(scrollTop, canvasWrapper - canvasWrapperHeight / 2, canvasWrapper, 0, 1)});
		    $(".canvas-graphic").css({transform : "scale" + "(" + map_range(scrollTop, canvasWrapper  - canvasWrapperHeight / 2, canvasWrapper, 0.75, 1) + ")"});
		    $(".canvas-text").css({opacity : map_range(scrollTop, canvasWrapper - canvasWrapperHeight / 2, canvasWrapper, 0, 1)});

	    }


	    if (window.innerWidth >= 960 && scrollTop >= canvasWrapper + 100){
		    $(".canvas-graphic").css({transform : "translateX" + "(" + map_range(scrollTop, canvasWrapper + 100, canvasWrapper + 300, 0, -500) + "px)"});
		    $(".canvas-graphic").css({opacity : map_range(scrollTop, canvasWrapper + 100, canvasWrapper + 300, 1, 0)});
	    }


	 	// Controls behavior
	    if (window.innerWidth >= 960 && scrollTop >= controlsWrapper  / 2){
		    $(".controls-graphic").css({opacity : map_range(scrollTop, controlsWrapper  - controlsWrapperHeight / 2, controlsWrapper, 0, 1)});
		    $(".controls-graphic").css({transform : "scale" + "(" + map_range(scrollTop, controlsWrapper  - controlsWrapperHeight / 2, controlsWrapper, 0.75, 1) + ")"});
		    $(".controls-text").css({opacity : map_range(scrollTop, controlsWrapper  - controlsWrapperHeight / 2, controlsWrapper , 0, 1)});

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

	var scrollTop = $(document).scrollTop();
	var layersGraphicHeight = $("#layers-graphic").height();
	var canvasGraphicHeight = $("#canvas-graphic").height();
	var controlsGraphicHeight = $("#controls-graphic").height();

	layersWrapperHeight = $(".layers-wrapper").height();
	canvasWrapperHeight = $(".canvas-wrapper").height();
	controlsWrapperHeight = $(".controls-wrapper").height();

	// update wrapper min heights and top positions of graphics
	if(window.innerWidth >= 960){

		$("#layers-graphic").css({"top": (window.innerHeight / 2) - (layersGraphicHeight / 2) + 15 + "px" });
		$("#canvas-graphic").css({"top": (window.innerHeight / 2) - (canvasGraphicHeight / 2) + 15 + "px" });
		$("#controls-graphic").css({"top": (window.innerHeight / 2) - (controlsGraphicHeight / 2) + 15 + "px" });
	}

	layersWrapper = $(".layers-wrapper").offset().top;
	canvasWrapper = $(".canvas-wrapper").offset().top;
	controlsWrapper = $(".controls-wrapper").offset().top;
	
	// remove style
	if(window.innerWidth < 960){
		$(".layers-graphic").removeAttr( 'style' );
		$(".layers-text").removeAttr( 'style' );
		$(".canvas-graphic").removeAttr( 'style' );
		$(".canvas-text").removeAttr( 'style' );
		$(".controls-graphic").removeAttr( 'style' );
		$(".controls-text").removeAttr( 'style' );
		$(".layers-wrapper").removeAttr( 'style' );
		$(".canvas-wrapper").removeAttr( 'style' );
		$(".controls-wrapper").removeAttr( 'style' );
	}

	// Set again reposition after scrolled back to top
	if(window.innerWidth >= 960){
		$("#layers-graphic").css({"top": (window.innerHeight / 2) - (layersGraphicHeight / 2) + 15 + "px" });
		$("#canvas-graphic").css({"top": (window.innerHeight / 2) - (canvasGraphicHeight / 2) + 15 + "px" });
		$("#controls-graphic").css({"top": (window.innerHeight / 2) - (controlsGraphicHeight / 2) + 15 + "px" });
	}

  	// Remove invisible class if scrolling down 
	if(window.innerWidth >= 960 && scrollTop > lastScrollTop){
		$("#layers-graphic").removeClass("invisible");
		$("#canvas-graphic").removeClass("invisible");
		$("#controls-graphic").removeClass("invisible");
	}

  	// Layers behavior
    if (window.innerWidth >= 960 && scrollTop >= layersWrapper / 2){
	    $(".layers-graphic").css({opacity : map_range(scrollTop, layersWrapper - layersWrapperHeight / 2, layersWrapper , 0, 1)});
	    $(".layers-graphic").css({transform : "scale" + "(" + map_range(scrollTop, layersWrapper - layersWrapperHeight / 2, layersWrapper , 0.75, 1) + ")"});
	    $(".layers-text").css({opacity : map_range(scrollTop, layersWrapper - layersWrapperHeight / 2, layersWrapper , 0, 1)});
    }


    if (window.innerWidth >= 960 && scrollTop >= layersWrapper + 100){
	    $(".layers-graphic").css({transform : "translateX" + "(" + map_range(scrollTop, layersWrapper + 100, layersWrapper + 300, 0, -500) + "px)"});
	    $(".layers-graphic").css({opacity : map_range(scrollTop, layersWrapper + 100, layersWrapper + 300, 1, 0)});
    }

    // Canvas behavior
    if (window.innerWidth >= 960 && scrollTop >= canvasWrapper  / 2){
	    $(".canvas-graphic").css({opacity : map_range(scrollTop, canvasWrapper / 2, canvasWrapper, 0, 1)});
	    $(".canvas-graphic").css({transform : "scale" + "(" + map_range(scrollTop, canvasWrapper  / 2, canvasWrapper, 0.75, 1) + ")"});
	    $(".canvas-text").css({opacity : map_range(scrollTop, canvasWrapper / 2, canvasWrapper, 0, 1)});

    }


    if (window.innerWidth >= 960 && scrollTop >= canvasWrapper + 100){
	    $(".canvas-graphic").css({transform : "translateX" + "(" + map_range(scrollTop, canvasWrapper + 100, canvasWrapper + 300, 0, -500) + "px)"});
	    $(".canvas-graphic").css({opacity : map_range(scrollTop, canvasWrapper + 100, canvasWrapper + 300, 1, 0)});
    }


 	// Controls behavior
    if (window.innerWidth >= 960 && scrollTop >= controlsWrapper  / 2){
	    $(".controls-graphic").css({opacity : map_range(scrollTop, controlsWrapper  / 2, controlsWrapper - 300, 0, 1)});
	    $(".controls-graphic").css({transform : "scale" + "(" + map_range(scrollTop, controlsWrapper  / 2, controlsWrapper - 300, 0.75, 1) + ")"});
	    $(".controls-text").css({opacity : map_range(scrollTop, controlsWrapper  / 2, controlsWrapper - 100, 0, 1)});

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


});

