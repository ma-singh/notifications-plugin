(function($) {
	$('#alert').alertMsg();

	$('#warning').warningMsg();

	$('#error').errorMsg();

	$('#success').successMsg();

})(jQuery);



/* ======= WAYS TO WRITE .READY ======= */
/*
	// Method One >>>> This is the original, long way
		$(document).ready(function(){
		
		});

	// Method Two >>>> This is the shorthand way
		$(function() {
		
		});

	// Method Three >>>> This one is modal, use it when making plugins
						It also embed functions inside of functions 
						that use '$' to reference jQuery
		(function($) {
		
		})(jQuery);

*/