/**
 * A version of jQuery.fadeToggle() that uses 'visibility' CSS styling
 *
 * @author   Eric Christenson
 * @date     February 22, 2015
 * @version  1.0
 * @license  MIT License (http://opensource.org/licenses/MIT)
 *
 * @param  fadeSpeed  int (fade-out time in milliseconds. Optional, defaults to 1 second)
 */
(function ($) {
    $.fn.visibilityFadeToggle = function (fadeSpeed) {
        fadeSpeed = fadeSpeed || 1000;

        $(this).each(function (index) {
            if ($(this).css('visibility') === 'hidden') {
                $(this).delay(index * 100).css({opacity: 0, visibility: 'visible'}).fadeTo(parseInt(fadeSpeed), 1);
            } else {
                $(this).delay(index * 100).fadeTo(parseInt(fadeSpeed), 0, function () {
                    $(this).css({ visibility: 'hidden', opacity: 1 });
                });
            }
        });
    }
})(jQuery);