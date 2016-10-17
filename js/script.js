/* 
 Created on : 05.02.2016, 13:07:32
 Author     : Artik
 */
(function ($) {
    $.fn.flyHeader = function (className) {
        var scroll = $(window).scrollTop();
        var self = $(this);
        var offset = self.offset().top;
        var flag = true;
        var setclass = false;

        function check() {
            if (flag) {
                flag = false;
                if (scroll > offset) {
                    if (!setclass) {
                        self.addClass(className);
                        setclass = true;
                    }
                } else {
                    self.removeClass(className);
                    setclass = false;
                }
                setTimeout(function () {
                    flag = true;
                }, 150);
            }
        }
        $(window).scroll(function () {
            scroll = $(window).scrollTop();
            check();
        }).load(function () {
            setInterval(function () {
                check();
            }, 333);
        });

    };

    $.fn.sendMail = function (data) {
        var frm = $(this);
        var container = frm.parent(".call-form");

        function success() {
            container.find(".success").fadeIn(200);
            frm.remove();
            setTimeout(function () {
                $(".call-me.active").click();
            }, 3000);
        }

        function fail() {
            container.css("background-image", "url(images/cat2.jpg)");
            container.find(".error").fadeIn(200);
            frm.css("display", "none");
            frm.find("input[type='submit']").attr('disabled', false);
            setTimeout(function () {
                container.css("background-image", "url(/images/cat.jpg)");
                container.find(".error").css("display", "none");
                frm.fadeIn(200);
            }, 3000);
        }

        $.ajax({
            url: "http://docs.google.com/forms/d/1UgaZGeh-a-P5XicohpUS4M7NhKIA-saselG0timvnto/formResponse",
            type: "POST",
            dataType: "xml",
            data: data,
            beforeSend: function () {
                frm.find("input[type='submit']").attr('disabled', true);
            },
            complete: function (e, jqXHR, textStatus) {
                if (e.status === 0 || e.status === 200) {
                    success();
                }
                else{
                    fail();
                }
            }
        });
    };

    $.fn.roundProgress = function (percent) {
        var scrollFlag = true;
        var winh = $(window).height();
        var scroll = $(window).scrollTop();
        var rndId = "text-" + Math.random();

        var progressContent = $(this);

        var r3 = $("<div />").addClass("r3");
        var r2 = $("<div />").addClass("r2").append(r3);
        var r1 = $("<div />").addClass("r1").append(r2);
        var r0 = $("<div />").addClass("r0").append(r1);

        var roundProgress = $("<div />").addClass("round-progress");
        if (percent >= 70) {
            roundProgress.addClass("green");
        } else if (percent >= 40) {
            roundProgress.addClass("orange");
        }
        roundProgress.append(r0);

        var percentBlock = $("<span />").text("%");
        var valBlock = $("<span />").text("0").attr("id", rndId);
        var textBlock = $("<div />").addClass("text").append(valBlock).append(percentBlock);
        var progressItem = $("<div />").addClass("progress-item").append(roundProgress);

        progressContent.append(textBlock).append(progressItem);

        var flag = true;
        $(window).scroll(function(){
            scroll = $(window).scrollTop();
            if (flag) {
                flag = false;
                check(scroll);
                setTimeout(function () {
                    flag = true;
                }, 150);
            }
        }).load(function () {
            check(scroll);
        });
        $(document).ready(function () {
            animate(0);
        });

        function check(scroll) {
            if (scroll + winh * 0.7 > progressContent.offset().top && scrollFlag) {
                scrollFlag = false;
                var numSources = new countUp(rndId, 0, percent, 0, 1.2);
                numSources.start();

                animate(percent);
                progressContent.addClass("active");
            }
        }

        function animate(percent) {
            var rotate = -90 * (100 - percent) / 100;
            r1.css("transform", "rotate(" + rotate + "deg)");
            r2.css("transform", "rotate(" + rotate + "deg)");
            r3.css("transform", "rotate(" + rotate + "deg)");
        }

        return progressContent;
    };

})(jQuery);

$(function () {
    addOnWheel(document, function (e) {
        $('html, body').stop();
    });

    $('a.short-link').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        if ($(target).length > 0) {
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top - 70
            }, 1000);
        }
    });
    var speed = 250;
    $(".modal-open").click(function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $(".c-modal" + target).fadeIn(speed);
    });

    $(".c-modal").click(function (e) {
        if ($(e.target).closest(".call-form").length)
            return;
        $(".c-modal").fadeOut(speed);
        e.stopPropagation();
    });

    $(".hide-menu").click(function () {
        $("header nav ul").fadeIn(250);
    });

    $("header nav ul").click(function () {
        if ($(".hide-menu").css("display") === "block") {
            $("header nav ul").fadeOut(250);
        }
    });

    $(".all-projects").click(function () {
        $(this).parent(".all-projects-block").toggleClass("active");
    });

    $(".progress-content").each(function () {
        var percent = $(this).attr("data-percent");
        $(this).roundProgress(percent);
    });

    $("#mail-form").on("submit", function (e) {
        e.preventDefault();
        function isValidEmailAddress(emailAddress) {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            return pattern.test(emailAddress);
        }

        var frm = $(this);
        var name = $("#name");
        var email = $("#email");
        var text = $("#text");
        var err = false;

        if (name.val().length < 2) {
            err = true;
            name.addClass("err");
            console.log("invalid name");
        }
        if (!isValidEmailAddress(email.val())) {
            err = true;
            email.addClass("err");
            console.log("invalid email");
        }
        if (text.val().length < 2) {
            err = true;
            text.addClass("err");
            console.log("invalid text");
        }
        if (!err) {
            name.removeClass("err");
            email.removeClass("err");
            text.removeClass("err");

            var data = frm.serialize();
            frm.sendMail(data);
        }
    });

    $("header").flyHeader("fly");

});
$(window).resize(function () {
    if ($(".hide-menu").css("display") === "block") {
        $("header nav ul").css("display", "none");
    }
    else {
        $("header nav ul").css("display", "block");
    }
});
// scroll animate fix
function addOnWheel(elem, handler) {
    if (elem.addEventListener) {
        if ('onwheel' in document) {
            elem.addEventListener("wheel", handler);
        } else if ('onmousewheel' in document) {
            elem.addEventListener("mousewheel", handler);
        } else {
            elem.addEventListener("MozMousePixelScroll", handler);
        }
    } else {
        elem.attachEvent("onmousewheel", handler);
    }
}