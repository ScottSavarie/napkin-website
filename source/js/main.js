
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

var layersGraphicHeight = $("#layers-graphic").height();
var canvasGraphicHeight = $("#canvas-graphic").height();
var controlsGraphicHeight = $("#controls-graphic").height();

// update wrapper min heights and top positions of graphics
if(window.innerWidth >= 960){
	$(".layers-wrapper").css({"min-height": window.innerHeight});
	$(".canvas-wrapper").css({"min-height": window.innerHeight});
	$(".controls-wrapper").css({"min-height": window.innerHeight});
	$("#layers-graphic").css({"top": (window.innerHeight / 2) - (layersGraphicHeight / 2) + 15 + "px" });
	$("#canvas-graphic").css({"top": (window.innerHeight / 2) - (canvasGraphicHeight / 2) + 15 + "px" });
	$("#controls-graphic").css({"top": (window.innerHeight / 2) - (controlsGraphicHeight / 2) + 15 + "px" });
}

// get wrapper positions
var layersWrapper = $(".layers-wrapper").offset().top;
var canvasWrapper = $(".canvas-wrapper").offset().top;
var controlsWrapper = $(".controls-wrapper").offset().top;


$(window).scroll(function(event) {
  var scrollTop = $(document).scrollTop();
  console.log("scroll:" + scrollTop);
  console.log("canvas:" + canvasWrapper);

	// update wrapper min heights and top positions of graphics
	if(window.innerWidth >= 960){
		$(".layers-wrapper").css({"min-height": window.innerHeight});
		$(".canvas-wrapper").css({"min-height": window.innerHeight});
		$(".controls-wrapper").css({"min-height": window.innerHeight});
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
    if (window.innerWidth >= 960 && scrollTop >= layersWrapper - layersWrapper / 2){
	    $(".layers-graphic").css({opacity : map_range(scrollTop, layersWrapper - layersWrapper / 2, layersWrapper - 100, 0, 1)});
	    $(".layers-graphic").css({transform : "scale" + "(" + map_range(scrollTop, layersWrapper - layersWrapper / 2, layersWrapper - 100, 0.75, 1) + ")"});
	    $(".layers-text").css({opacity : map_range(scrollTop, layersWrapper - layersWrapper / 2, layersWrapper - 100, 0, 1)});
    }


    if (window.innerWidth >= 960 && scrollTop >= layersWrapper + 100){
	    $(".layers-graphic").css({transform : "translateX" + "(" + map_range(scrollTop, layersWrapper + 100, layersWrapper + 300, 0, -500) + "px)"});
	    $(".layers-graphic").css({opacity : map_range(scrollTop, layersWrapper + 100, layersWrapper + 300, 1, 0)});
    }

    // Canvas behavior
    if (window.innerWidth >= 960 && scrollTop >= canvasWrapper - canvasWrapper / 2){
	    $(".canvas-graphic").css({opacity : map_range(scrollTop, canvasWrapper - canvasWrapper / 2, canvasWrapper - 100, 0, 1)});
	    $(".canvas-graphic").css({transform : "scale" + "(" + map_range(scrollTop, canvasWrapper - canvasWrapper / 2, canvasWrapper - 100, 0.75, 1) + ")"});
	    $(".canvas-text").css({opacity : map_range(scrollTop, canvasWrapper - canvasWrapper / 2, canvasWrapper - 100, 0, 1)});

    }


    if (window.innerWidth >= 960 && scrollTop >= canvasWrapper + 100){
	    $(".canvas-graphic").css({transform : "translateX" + "(" + map_range(scrollTop, canvasWrapper + 100, canvasWrapper + 300, 0, -500) + "px)"});
	    $(".canvas-graphic").css({opacity : map_range(scrollTop, canvasWrapper + 100, canvasWrapper + 300, 1, 0)});
    }


 	// Controls behavior
    if (window.innerWidth >= 960 && scrollTop >= controlsWrapper - controlsWrapper / 2){
	    $(".controls-graphic").css({opacity : map_range(scrollTop, controlsWrapper - controlsWrapper / 2, controlsWrapper - 300, 0, 1)});
	    $(".controls-graphic").css({transform : "scale" + "(" + map_range(scrollTop, controlsWrapper - controlsWrapper / 2, controlsWrapper - 300, 0.75, 1) + ")"});
	    $(".controls-text").css({opacity : map_range(scrollTop, controlsWrapper - controlsWrapper / 2, controlsWrapper - 100, 0, 1)});

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


	// update wrapper min heights and top positions of graphics
	if(window.innerWidth >= 960){
		$(".layers-wrapper").css({"min-height": window.innerHeight});
		$(".canvas-wrapper").css({"min-height": window.innerHeight});
		$(".controls-wrapper").css({"min-height": window.innerHeight});
		$("#layers-graphic").css({"top": (window.innerHeight / 2) - (layersGraphicHeight / 2) + 15 + "px" });
		$("#canvas-graphic").css({"top": (window.innerHeight / 2) - (canvasGraphicHeight / 2) + 15 + "px" });
		$("#controls-graphic").css({"top": (window.innerHeight / 2) - (controlsGraphicHeight / 2) + 15 + "px" });
	}

	var layersWrapper = $(".layers-wrapper").offset().top;
	var canvasWrapper = $(".canvas-wrapper").offset().top;
	var controlsWrapper = $(".controls-wrapper").offset().top;
	
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

  	// Layers behavior
    if (window.innerWidth >= 960 && scrollTop >= layersWrapper - layersWrapper / 2){
	    $(".layers-graphic").css({opacity : map_range(scrollTop, layersWrapper - layersWrapper / 2, layersWrapper - 100, 0, 1)});
	    $(".layers-graphic").css({transform : "scale" + "(" + map_range(scrollTop, layersWrapper - layersWrapper / 2, layersWrapper - 100, 0.75, 1) + ")"});
	    $(".layers-text").css({opacity : map_range(scrollTop, layersWrapper - layersWrapper / 2, layersWrapper - 100, 0, 1)});
    }


    if (window.innerWidth >= 960 && scrollTop >= layersWrapper + 100){
	    $(".layers-graphic").css({transform : "translateX" + "(" + map_range(scrollTop, layersWrapper + 100, layersWrapper + 300, 0, -500) + "px)"});
	    $(".layers-graphic").css({opacity : map_range(scrollTop, layersWrapper + 100, layersWrapper + 300, 1, 0)});
    }

    // Canvas behavior
    if (window.innerWidth >= 960 && scrollTop >= canvasWrapper - canvasWrapper / 2){
	    $(".canvas-graphic").css({opacity : map_range(scrollTop, canvasWrapper - canvasWrapper / 2, canvasWrapper - 100, 0, 1)});
	    $(".canvas-graphic").css({transform : "scale" + "(" + map_range(scrollTop, canvasWrapper - canvasWrapper / 2, canvasWrapper - 100, 0.75, 1) + ")"});
	    $(".canvas-text").css({opacity : map_range(scrollTop, canvasWrapper - canvasWrapper / 2, canvasWrapper - 100, 0, 1)});

    }


    if (window.innerWidth >= 960 && scrollTop >= canvasWrapper + 100){
	    $(".canvas-graphic").css({transform : "translateX" + "(" + map_range(scrollTop, canvasWrapper + 100, canvasWrapper + 300, 0, -500) + "px)"});
	    $(".canvas-graphic").css({opacity : map_range(scrollTop, canvasWrapper + 100, canvasWrapper + 300, 1, 0)});
    }


 	// Controls behavior
    if (window.innerWidth >= 960 && scrollTop >= controlsWrapper - controlsWrapper / 2){
	    $(".controls-graphic").css({opacity : map_range(scrollTop, controlsWrapper - controlsWrapper / 2, controlsWrapper - 300, 0, 1)});
	    $(".controls-graphic").css({transform : "scale" + "(" + map_range(scrollTop, controlsWrapper - controlsWrapper / 2, controlsWrapper - 300, 0.75, 1) + ")"});
	    $(".controls-text").css({opacity : map_range(scrollTop, controlsWrapper - controlsWrapper / 2, controlsWrapper - 100, 0, 1)});

    }

    if (window.innerWidth >= 960 && scrollTop >= controlsWrapper +100 ){
	    $(".controls-graphic").css({transform : "translateY" + "(" + map_range(scrollTop, controlsWrapper + 100 , controlsWrapper + 400, 0, -300) + "px)"});
    }


    else {
      
    }





});

