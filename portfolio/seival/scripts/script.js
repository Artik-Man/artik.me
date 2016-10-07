$(function () {
    var showContent = function (scroll) {
        var h = $(window).height() / 1.2;
        $(".show-content").each(function () {
            if (scroll + h >= $(this).offset().top) {
                $(this).addClass("show");
            }
        });
    };

    $("a.scroll-link").click(function (e) {
        e.preventDefault();
        var href = $(this).attr("href");
        var obj = $(href);
        $('html, body').stop().animate({
            scrollTop: obj.offset().top - 50
        }, 500);
    });

    $(".banner .text .slide-link").click(function (e) {
        e.preventDefault();
        var text = $(this).parents(".text");
        var slide = $(this).parents(".slide");
        text.append(slide);
    });

    var scroll = 0;
    scroll = $(window).scrollTop();

    $(window).scroll(function () {
        scroll = $(window).scrollTop();
        showContent(scroll);
    });

    showContent(scroll);

});
