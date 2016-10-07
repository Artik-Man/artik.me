/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var flag = true;
function resizeBanner() {
    if (flag) {
        flag = false;
        setTimeout(function () {
            flag = true;
            $(".banner-3 .block").height($(".banner-3 .block img").eq(0).height());
        }, 200);
    }
}
$(document).ready(function () {
    resizeBanner();

    $(".fancybox").fancybox({
        helpers: {
            thumbs: {
                width: 50,
                height: 50
            }
        }
    });

    $(".open-rubric").click(function () {
        $(".rubric").slideDown(300);
        $(".open-rubric").slideUp(200);
    });

    $(".m").click(function () {
        $(".m").removeClass("n");
        $(this).addClass("n");
        var a = $(".partners").not(".n");
        var b = $(".partners.n");
        a.addClass("n");
        b.removeClass("n");
    });

    $("a.sharp-link").click(function (e) {
        var id = $(this).attr("href").substr(1);
        var obj = $("#" + id);
        if (typeof id !== "undefined") {
            $('html, body').stop().animate({
                'scrollTop': obj.offset().top - 50
            }, 500, 'swing');
        }
        e.preventDefault();
    });

    $(".nano").nanoScroller({alwaysVisible: true});

    $('.slick.s3').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]

    });
    $('.slick.s2').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        responsive: [{
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
});
$(window).load(function () {
    $(".galery").not(".slick").masonry({
        itemSelector: '.item',
        isResizable: true,
        columnWidth: 1
    });

    $(".banner-3 .block img").css("display", "none");
    $(".banner-3 .block img.first").css("display", "block");

    var speed = 1000;
    setInterval(function () {
        setTimeout(function () {
            changeImg($(".banner-3 .block").eq(0));
        }, speed);
        setTimeout(function () {
            changeImg($(".banner-3 .block").eq(1));
        }, speed * 1.2);
        setTimeout(function () {
            changeImg($(".banner-3 .block").eq(2));
        }, speed * 1.4);
    }, speed * 20);

    function changeImg(t) {
        var a = t.children("img").eq(0);
        a.fadeOut(speed);
        setTimeout(function () {
            a.removeClass("first");
            t.append(a);
            t.children("img").eq(0).addClass("first");
            t.children("img").eq(0).fadeIn(speed);
        }, speed);
    }

}).resize(function () {
    resizeBanner();
});

