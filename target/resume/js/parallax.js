$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.profile').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.project').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#project').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.school').click(function(){
        $('html, body').animate({
            scrollTop:$('#school').offset().top
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });
    $('a.skill').click(function(){
        $('html, body').animate({
            scrollTop:$('#skill').offset().top
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });
	$('a.about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#project').offset().top - (($('#school').offset().top - $('#project').offset().top) / 2);
	var section3Top =  $('#school').offset().top - (($('#skill').offset().top - $('#school').offset().top) / 2);
    var section4Top =  $('#skill').offset().top - (($('#about').offset().top - $('#skill').offset().top) / 2);
	var section5Top =  $('#about').offset().top - (($(document).height() - $('#about').offset().top) / 2);
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.profile').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.project').addClass('active');
    } else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
        $('nav#primary a.school').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.skill').addClass('active');
	} else if ($(document).scrollTop() >= section5Top){
		$('nav#primary a.about').addClass('active');
	}
	
}
