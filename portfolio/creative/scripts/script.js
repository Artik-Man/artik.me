$(function () {

    var winW = $(window).width(),
            scroll = $(window).scrollTop(),
            speed = 250;
    function imageBoxSlick() {
        if (winW >= 751) {
            $(".image-box.slick-initialized").slick('unslick');
        }
        else {
            $(".image-box").slick({
                infinite: true,
                dots: false,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '150px',
                centerMode: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            centerPadding: '200px'
                        }
                    },
                    {
                        breakpoint: 620,
                        settings: {
                            centerPadding: '150px'
                        }
                    }
                ]
            });
        }
    }

    imageBoxSlick();

    $(".srv-container").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: false,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '180px',
                    centerMode: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '150px',
                    centerMode: true
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '120px',
                    centerMode: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '100px',
                    centerMode: true
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }
        ]
    });

    $(".content-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplaySpeed: 5000,
        autoplay: true
    });

    $(".reviews .slider").slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        dots: false
    });

    $(".certificates .slider").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots: false
    });


    $(".fancy-image").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        helpers: {
            title: {
                type: 'inside'
            }
        }
    });

    $(".fancy-video").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        helpers: {
            media: {}
        }
    });

    $(".accordion .item").click(function () {
        var i = $(this);
        var e = $(".accordion .item").not(i);
        if (!i.hasClass("active")) {
            e.removeClass("active");
            i.addClass("active");
        }
    });



    $('.short-link').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        var index = target.indexOf("#");

        if (index > 0 && window.location.pathname.replace("/", "") !== target.slice(0, index)) {
            location = target;
        }

        target = target.substring(index);

        if ($(target).length > 0) {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 10
            }, speed);
        }
    });

    $(".main-menu .menu-btn").click(function () {
        $(".main-menu").toggleClass("show");
    });

    $(".main-menu .shadow").click(function () {
        $(".main-menu").toggleClass("show");
    });

    $(".nav .hide-menu").click(function () {
        $(".nav li").not(".hide-menu").slideToggle(speed);
    });

    $(window).resize(function () {

        winW = $(window).width();

        var hideMenu = $(".nav li").not(".hide-menu");
        winW >= 751 ? hideMenu.css("display", "table-cell") : hideMenu.css("display", "none");

        imageBoxSlick();

    }).scroll(function () {

        scroll = $(window).scrollTop();

        scroll > 500 ? $(".pageup-container").addClass("show") : $(".pageup-container").removeClass("show");

    });
});
