'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
            // needed to use joyride
            // doc: http://foundation.zurb.com/docs/components/joyride.html
            $(document).on('click', '#start-jr', function () {
                $(document).foundation('joyride', 'start');
            });
			_userAgentInit();

      var educationTop = $('.education').offset().top - 50;
      $(window).on('scroll', function(){
        var windowTop = $(window).scrollTop();
        $('.sticky').css('transform', 'translateY(' + windowTop + 'px)');

        if($(window).scrollTop() > educationTop){
          $('.title').addClass('show');
        } else {
          $('.title').removeClass('show');
        }

      });

		};
	return {
		init: _init
	};
})(document, jQuery);

(function() {
	app.init();
})();
