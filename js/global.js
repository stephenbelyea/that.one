jQuery(document).ready(function($){
	// Grab window dimensions and scroll position on load.
	var $win = do_the_sizes();
	// Listen for resizing.
	$(window).on('resize',function(){ 
		$win = do_the_sizes(); 
	});
	// Listen for scrolling. 
	$(document).on('scroll',function(){ 
		$win.s = do_the_scroll(); 
	});

	// Make with the JS.
	console.log('Do it!');
});

// Return scroll position int.
function do_the_scroll(){ 
	return $(document).scrollTop(); 
}
// Return sizing / scroll position as object values. 
function do_the_sizes(){ 
	return {
		'w' : $(window).width(),
		'h' : $(window).height(),
		's' : do_the_scroll()
	}; 
}