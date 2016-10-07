/* 
 Created on : 10.03.2016, 15:12:22
 Author     : Artik
 */
(function ($) {

    $.fn.middle = function () {
        var self = $(this);
        var wh = $(window).height();

        function init() {
            if (self.height() < wh) {
                var margin = (wh - self.height()) / 2;
                self.css("margin-top", margin + "px");
            }
        }
        init();
        $(window).resize(function () {
            wh = $(window).height();
            init();
        }).load(function () {
            init();
        });

    };

})(jQuery);

$(function () {
    $('.middle').middle();
});
