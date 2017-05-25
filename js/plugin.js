(function($) {
	var	div = $('<div id="overlay"></div>'),
		section = $('<section id="notification"></section>'),
		p = $('<p id="message"></p>');

	// create a div to overlay the page with a section and paragraph tags for notifications
	div.insertAfter($('div')).append(section);
	section.append(p);


	var overlay = $('#overlay'),
		notification = $('#notification'),
		message = $('#message');

// ===== this function displays the overlay and sets the appropriate size and styling ===== //
	$.fn.overlayStyle = function() {
		// show the div to overlay the background
		overlay.fadeIn()
			// modal background overlay
			.css({
				"position": "absolute",
				"top": "0",
				"left": "0",
				"width" : "100%",
				"height" : "100vh",
				"background-color" : "rgba(0,0,0,0.5)",
				"z-index": "1000"
			});
	}
// ===== this function sets the appropriate size and styling for the secton of the notification ===== //
	$.fn.notificationStyle = function(bgColor1, bgColor2) {
		notification
			// set up the notification
			.css({
				"width" : "40%",
				"z-index" : "1001",
				"position" : "relative",
				"top" : "40%",
				"margin" : "auto",
				"border" : "2px solid" + bgColor2 + "",
				"border-radius" : "20px",
				"padding" : "30px 0",
				"background" : "linear-gradient(#fff, " + bgColor1 + ")"
			});
	}
// ===== this function sets the color of the text for the notification ===== //
	$.fn.msgStyle = function(color) {
		message
			.css({
				"color" : color,
				"text-align" : "center",
				"font" : "2.0em Arial"
			});
	}
	$.fn.boldText = function(){
		$('em').css({
			"font-style" : "normal",
			"font-weight" : "bold"
		});
	}

	/* ========= ALERT NOTIFICATION ========== */
	$.fn.alertMsg = function() {
		this.on('click', function(e) {
			// don't open any link
			e.preventDefault();
			$.fn.overlayStyle();
			$.fn.notificationStyle("#bbb", "#555");
			$.fn.msgStyle("#555");
			
			// set the alert text
			message.html('Something just happened!');
			// close the alert
			$.fn.dismiss();	
		});
	}

	/* ========== WARNING NOTIFICATION ========== */
	$.fn.warningMsg = function() {
		this.on('click', function(e) {
			// don't open any link
			e.preventDefault();
			$.fn.overlayStyle();
			$.fn.notificationStyle("#fcff84", "#c49300");
			$.fn.msgStyle("#c49300");
			
			// set the alert text
			message.html('<em>Warning!</em><br /> Are you sure you want to do that?');
			$.fn.boldText();
			// close the alert
			$.fn.dismiss();	
		});
	}

	/* ========== ERROR NOTIFICATION ========== */
	$.fn.errorMsg = function() {
		this.on('click', function(e) {
			// don't open any link
			e.preventDefault();
			$.fn.overlayStyle();
			$.fn.notificationStyle("#fc8f8f", "#d30202");
			$.fn.msgStyle("#d30202");
			
			// set the alert text
			message.html('<em>ERROR</em><br /> Something went wrong!');
			$.fn.boldText();
			// close the alert
			$.fn.dismiss();	
		});
	}

	/* ========== SUCCESS NOTIFICATION ========== */
	$.fn.successMsg = function() {
		this.on('click', function(e) {
			// don't open any link
			e.preventDefault();
			$.fn.overlayStyle();
			$.fn.notificationStyle("#9ee2c2", "#046034");
			$.fn.msgStyle("#046034");
			
			// set the alert text
			message.html('<em>Success!</em><br /> You did something');
			$.fn.boldText();
			// close the alert
			$.fn.dismiss();	
		});
	}

	/* ========== DISMISS NOTIFICATION ========== */
	$.fn.dismiss = function() {
		// clicking the div overlay will hide the div and notification
		$('#notification').on('click', function() {
			overlay.fadeOut();
		})
	}
})(jQuery);