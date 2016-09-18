$(function() {
	$('.officer-profile').hide();
	$('#president').show();
	$('.officers-sidebar a').click(function() {
		$('.officer-profile').hide();
		$($(this).data('target')).show();
	});
});