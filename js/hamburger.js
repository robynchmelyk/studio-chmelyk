/* Open when someone clicks on the button */
$('.hamburger-open').click(function(event) {
	event.preventDefault();
	$('.mobile-menu-overlay').show();
	setTimeout(function() {
		$('.mobile-menu-overlay').css('left', '0px');
	}, 1);
});

/* Close when someone clicks on the "x" symbol inside the overlay */
$('.hamburger-close').click(function(event) {
	event.preventDefault();
	$('.mobile-menu-overlay').hide();
	setTimeout(function() {
		$('.mobile-menu-overlay').css('left', '100%');
	}, 1);
});