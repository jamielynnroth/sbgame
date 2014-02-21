// Filter teams by bus 
$(function () {
	'use strict';
// Show only the teams from selected bus
	$('a[href="#ca"]').click(function() {
		$('.team').hide();
		$('.ca').show();
	});
	$('a[href="#nw"]').click(function() {
		$('.team').hide();
		$('.nw').show();
	});
	$('a[href="#s"]').click(function() {
		$('.team').hide();
		$('.s').show();
	});
	$('a[href="#mx"]').click(function() {
		$('.team').hide();
		$('.mx').show();
	});
	$('a[href="#ne"]').click(function() {
		$('.team').hide();
		$('.ne').show();
	});
	$('a[href="#mw"]').click(function() {
		$('.team').hide();
		$('.mw').show();
	});
	$('a[href="#wc"]').click(function() {
		$('.team').hide();
		$('.wc').show();
	});
	$('a[href="#se"]').click(function() {
		$('.team').hide();
		$('.se').show();
	});
	// All teams
	$('a[href="#all"]').click(function() {
		// $('.team').hide();
		$('.team').show();
	});

	// Show triangle on rollover to indicate bus affiliation
	$('.team').hover(function () {
		$(this).find('.corner-arrow').removeClass('hidden');
	}, function() {
		$(this).find('.corner-arrow').addClass('hidden');
	});

	$('.ca .corner-arrow').html('<h4>Canada</h4>');
	$('.ne .corner-arrow').html('<h4>Northeast</h4>');
	$('.nw .corner-arrow').html('<h4>Northwest</h4>');
	$('.s .corner-arrow').html('<h4>South</h4>');
	$('.mx .corner-arrow').html('<h4>Mexico</h4>');
	$('.wc .corner-arrow').html('<h4>West Coast</h4>');
	$('.mw .corner-arrow').html('<h4>Midwest</h4>');
	$('.se .corner-arrow').html('<h4>Southeast</h4>');








}); //fn