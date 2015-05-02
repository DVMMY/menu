$(document).ready(function() {

	$('#menu h3').click(function() {
		$('#menu ul ul').slideUp();
		if (!$(this).next().is('visible')) {
			$(this).next().slideDown();
		};
	});
	
});
