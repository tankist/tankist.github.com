(function() {

	var special = jQuery.event.special,
		uid1 = 'D' + (+new Date()),
		uid2 = 'D' + (+new Date() + 1);

	special.scrollstart = {
		setup: function() {

			var timer,
				handler = function(evt) {

					var _self = this,
						_args = arguments;

					if (timer) {
						clearTimeout(timer);
					} else {
						evt.type = 'scrollstart';
						jQuery.event.handle.apply(_self, _args);
					}

					timer = setTimeout(function() {
						timer = null;
					}, special.scrollstop.latency);

				};

			jQuery(this).bind('scroll', handler).data(uid1, handler);

		},
		teardown: function() {
			jQuery(this).unbind('scroll', jQuery(this).data(uid1));
		}
	};

	special.scrollstop = {
		latency: 300,
		setup: function() {

			var timer,
				handler = function(evt) {

					var _self = this,
						_args = arguments;

					if (timer) {
						clearTimeout(timer);
					}

					timer = setTimeout(function() {

						timer = null;
						evt.type = 'scrollstop';
						jQuery.event.handle.apply(_self, _args);

					}, special.scrollstop.latency);

				};

			jQuery(this).bind('scroll', handler).data(uid2, handler);

		},
		teardown: function() {
			jQuery(this).unbind('scroll', jQuery(this).data(uid2));
		}
	};

})();

$(function() {
<<<<<<< HEAD
	$('#to-experience').click(
		function (e) {
			$('html, body').animate({scrollTop: $("#experience-section").offset().top}, 4000);
		}
	);
=======
>>>>>>> gh-pages

	$('#nav_up').click(
		function (e) {
			$('html, body').animate({scrollTop: '0px'}, 5000);
		}
	);

<<<<<<< HEAD
	$('#bto-education').click(
		function (e) {
			$('html, body').animate({scrollTop: $("#education-section").offset().top}, 4000);
		}
	);


	$('#to-skills').click(
		function (e) {
			$('html, body').animate({scrollTop: $("#skills-section").offset().top}, 4000);
		}
	);

	$('#bto-experience').click(
		function (e) {
			$('html, body').animate({scrollTop: $("#experience-section").offset().top}, 4000);
=======
	$('.scroll-links a').click(
		function (e) {
			e.preventDefault();
			var match = $(this).attr('id').match(/b?to\-(\w+)/);
			if (match) {
				var id = match.pop();
				$('html, body').animate({scrollTop: $("#" + id + "-section").offset().top}, 2000);
			}
>>>>>>> gh-pages
		}
	);

});