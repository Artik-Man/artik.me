<?
//require_once '../portfolio.artik-man.ru/get-portfolio.php';
require_once './portfolio/get-portfolio.php';
$lang = "ru";
filter_input(INPUT_GET, 'lang') ? $lang = filter_input(INPUT_GET, 'lang') : $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
if ($lang !== "ru" && $lang !== "en") {
    $lang = "ru";
}

$xml = getPortfolioFromXML("portfolio.xml");
$portfolio = constructTwo($xml, $lang);

$text = array(
    "ru" => array(
        "lang-btn" => '<a href="?lang=en">EN</a>',
        "skill" => "Навыки",
        "portfolio" => "Портфолио",
        "contacts" => "Контакты",
        "slogan" => "Профессиональная вёрстка сайтов",
        "description" => "Резюме Мангасаряна Арташеса",
        "my-name" => "Артик",
        "my-surname" => "Мангасарян",
        "date-of-b" => "Дата рождения:",
        "date" => "01.08.1994",
        "univer" => "Вуз:",
        "NARFU" => "Северный (Арктический) федеральный университет <nobr>имени М. В. Ломоносова</nobr>",
        "dep" => "Факультет:",
        "department" => "Институт математики, информационных <nobr>и космических</nobr> технологий",
        "qualities" => "Личные качества:",
        "qualities-list" => "Люблю изучать <nobr>новые технологии</nobr>, <nobr>стараюсь доводить работу</nobr> <nobr>до идеала</nobr>",
        "exp" => "Опыт вёрстки:",
        "experience" => "2 года",
        "current-job" => "Текущее место работы:",
        "job" => '<a href="http://primepix.ru" target="_blank">Primepix</a>',
        "contacts2" => "Контакты:",
        "basic-skills" => "ОСНОВНЫЕ НАВЫКИ",
        "contact-info" => "КОНТАКТНАЯ ИНФОРМАЦИЯ",
        "phone" => "Телефон:",
        "call-mesages" => array(
            "feedback" => "Обратная связь",
            "your-name" => "Ваше имя",
            "your-e-mail" => "Ваш e-mail",
            "message" => "Сообщение",
            "send" => "Отправить",
            "success" => "Ваше сообщение доставлено.",
            "fail" => "Произошла какая-то ошибка..."
        )
    ),
    "en" => array(
        "lang-btn" => '<a href="?lang=ru">RU</a>',
        "skill" => "Skills",
        "portfolio" => "Portfolio",
        "contacts" => "Contacts",
        "slogan" => "Proffesional site's markup",
        "description" => "Artik Mangasaryan's CV",
        "my-name" => "Artik",
        "my-surname" => "Mangasaryan",
        "date-of-b" => "Date of Birth:",
        "date" => "The 1 of August, 1994",
        "univer" => "University:",
        "NARFU" => "Northern (Arctic) Federal University",
        "dep" => "Department:",
        "department" => "Institute <nobr>of mathemathics</nobr>, information <nobr>and space</nobr> technologies",
        "qualities" => "Personal qualities:",
        "qualities-list" => "I enjoy it <nobr>to learn</nobr> new technologies. <nobr>I always</nobr> get <nobr>the job</nobr> done.",
        "exp" => "Experience:",
        "experience" => "2 years",
        "current-job" => "Current job:",
        "job" => '<a href="http://primepix.ru" target="_blank">Primepix</a>',
        "contacts2" => "Contacts:",
        "basic-skills" => "Basic skills",
        "contact-info" => "CONTACT INFORMATION",
        "phone" => "Phone:",
        "call-mesages" => array(
            "feedback" => "Feedback",
            "your-name" => "Your name",
            "your-e-mail" => "Your e-mail",
            "message" => "Your Message",
            "send" => "Send",
            "success" => "Your message has been sent",
            "fail" => "Some error has occurred"
        )
    )
);
$allproj = glob("../portfolio/*");
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Artik</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <meta name="keywords" content="резюме, разработчик, ключевые навыки, поиск персонала, верстальщик, frontend, front-end, фронтэнд, фронтэндер, Артик, Арташес, Мангасарян">
        <link href="/libs/bootstrap/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="/css/fonts.css" rel="stylesheet" type="text/css"/>
        <link href="/libs/font-awesome-4.5.0/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
        <link href="/css/style.css" rel="stylesheet" type="text/css"/>
        <link href="/css/adaptive.css" rel="stylesheet" type="text/css"/>
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon">

        <link rel="shortcut icon" type="image/png" href="/images/icons/16.png" sizes="16x16">
        <link rel="icon" type="image/png" href="/images/icons/32.png" sizes="32x32">
        <link rel="apple-touch-icon" sizes="57x57" href="/images/icons/57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/images/icons/60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/images/icons/72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/images/icons/76.png">
        <link rel="icon" type="image/png" href="/images/icons/96.png" sizes="96x96">
        <link rel="apple-touch-icon" sizes="114x114" href="/images/icons/114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/120.png">
        <meta name="twitter:image:src" content="/images/icons/120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/images/icons/144.png">
        <meta name="msapplication-TileImage" content="/images/icons/144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/152.png">
        <link rel="apple-touch-icon" sizes="167x167" href="/images/icons/167.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/180.png">
        <link rel="icon" type="image/png" href="/images/icons/192.png" sizes="192x192">
        <link rel="image_src" href="/images/icons/vk.png" />
        <meta property="og:image" content="/images/icons/og.png"/>
        <link rel="mask-icon" href="/images/icons/safari-pinned-tab.svg" color="#D03322">
        <link rel="manifest" href="/manifest.json">
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="msapplication-TileColor" content="#D03322">
        <meta name="theme-color" content="#D03322">
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content="<?= $text[$lang]["my-name"] ?> <?= $text[$lang]["my-surname"] ?>">
        <meta name="title" content="<?= $text[$lang]["my-name"] ?> <?= $text[$lang]["my-surname"] ?>" />
        <meta property="og:title" content="<?= $text[$lang]["my-name"] ?> <?= $text[$lang]["my-surname"] ?>"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="http://artik-man.ru"/>
        <meta name="twitter:domain" content="http://artik-man.ru"/>
        <meta name="description" content="<?= $text[$lang]["description"] ?>">
        <meta property="og:site_name" content="<?= $text[$lang]["description"] ?>"/>
        <meta name="twitter:site" content="<?= $text[$lang]["description"] ?>"/>
        <meta name="twitter:description" content="<?= $text[$lang]["description"] ?>"/>
        <meta property="og:description" content="<?= $text[$lang]["description"] ?>"/>

    </head>
    <body id="top">
        <header class="">
            <div class="container">
                <div class="logo">
                    <a href="#top" class="short-link">AM</a>
                </div>
                <nav>
                    <button class="hide-menu"><i class="fa fa-bars"></i></button>
                    <ul>
                        <li><a href="#skills" class="short-link"><?= $text[$lang]["skill"] ?></a></li>
                        <li><a href="#projects" class="short-link"><?= $text[$lang]["portfolio"] ?></a></li>
                        <li><a href="#contacts" class="short-link"><?= $text[$lang]["contacts"] ?></a></li>
                        <li><?= $text[$lang]["lang-btn"] ?></li>
                    </ul>

                </nav>
        </header>
    </div>
    <div class="container page">
        <h1>
            <?= $text[$lang]["my-name"] ?>
            <span><?= $text[$lang]["my-surname"] ?></span>
            <label><?= $text[$lang]["slogan"] ?></label>
        </h1>

        <section class="about">
            <div class="row">
                <div class="col-md-4">
                    <div class="avatar-box">
                        <img src="/images/me.jpg" alt="My photo">
                    </div>
                    <div class="padding-h hidden-sm hidden-xs">
                        <a href="#feedback" class="modal-open button"><?= $text[$lang]["call-mesages"]["feedback"] ?></a>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="about-text">
                        <div>
                            <label><?= $text[$lang]["date-of-b"] ?></label>
                            <p><?= $text[$lang]["date"] ?></p>
                        </div>
                        <div>
                            <label><?= $text[$lang]["univer"] ?></label>
                            <p><?= $text[$lang]["NARFU"] ?></p>
                        </div>
                        <div>
                            <label><?= $text[$lang]["dep"] ?></label>
                            <p><?= $text[$lang]["department"] ?></p>
                        </div>
                        <div>
                            <label><?= $text[$lang]["qualities"] ?></label>
                            <p><?= $text[$lang]["qualities-list"] ?></p>
                        </div>
                        <div>
                            <label><?= $text[$lang]["exp"] ?></label>
                            <p><?= $text[$lang]["experience"] ?></p>
                        </div>
                        <?/*<div>
                            <label><?= $text[$lang]["current-job"] ?></label>
                            <p><?= $text[$lang]["job"] ?></p>
                        </div>*/?>
                        <div>
                            <label><?= $text[$lang]["contacts2"] ?></label>
                            <p>
                                <span>
                                    <a href="tel:89062824201" rel="nofollow"><i class="fa fa-phone"></i> +7 906 282-42-01</a> 
                                </span>
                                <span>
                                    <a href="mailto:artik.alpha@ya.ru" rel="nofollow"> <i class="fa fa-envelope"></i> artik.alpha@ya.ru</a>
                                </span>
                                <span>
                                    <a href="skype:art-man-1994?call" rel="nofollow"> <i class="fa fa-skype"></i> art-man-1994</a> 
                                </span>
                                <span>
                                    <a href="https://vk.com/artasches" target="_blank" rel="nofollow"><i class="fa fa-vk"></i> <?= $text[$lang]["my-name"] ?> <?= $text[$lang]["my-surname"] ?></a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row hidden-lg hidden-md">
                <div class="col-sm-offset-3 col-sm-6 col-xs-12 padding-v padding-h-10">
                    <a href="#feedback" class="modal-open button"><?= $text[$lang]["call-mesages"]["feedback"] ?></a>
                </div>
            </div>
        </section>

        <h2 id="skills"><?= $text[$lang]["basic-skills"] ?></h2>

        <section class="skills">
            <div class="row text-center">
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 col-xxs-12">
                    <div class="progress-content" data-percent="95">
                        <img src="/images/html.png" alt="HTML">
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 col-xxs-12">
                    <div class="progress-content" data-percent="90">
                        <img src="/images/css.png" alt="CSS">
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 col-xxs-12">
                    <div class="progress-content" data-percent="85">
                        <img src="/images/less.png" alt="LESS">
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 col-xxs-12">
                    <div class="progress-content" data-percent="80">
                        <img src="/images/jq.png" alt="jQuery">
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 col-xxs-12">
                    <div class="progress-content" data-percent="75">
                        <img src="/images/bootstrap.png" alt="Bootstrap">
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 col-xxs-12">
                    <div class="progress-content" data-percent="70">
                        <img src="/images/js.png" alt="JavaScript">
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 col-xxs-12">
                    <div class="progress-content" data-percent="65">
                        <img src="/images/ajax.png" alt="AJAX">
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 col-xxs-12">
                    <div class="progress-content" data-percent="60">
                        <img src="/images/mysql.png" alt="MySQL">
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 col-xxs-12">
                    <div class="progress-content" data-percent="55">
                        <img src="/images/git.png" alt="GIT">
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 col-xxs-12">
                    <div class="progress-content" data-percent="45">
                        <img src="/images/angular.png" alt="AngularJS">
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 col-xxs-12">
                    <div class="progress-content" data-percent="40">
                        <img src="/images/php.png" alt="PHP">
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 col-xxs-12">
                    <div class="progress-content" data-percent="20">
                        <img src="/images/bitrix.png" alt="Bitrix">
                    </div>
                </div>
            </div>
        </section>

        <h2 id="projects"><?= $text[$lang]["portfolio"] ?></h2>

        <section class="projects">
            <div class="row">
                <?= $portfolio ?>
            </div>
        </section>

        <h2 id="contacts"><?= $text[$lang]["contact-info"] ?></h2>

        <section class="contacts">
            <div class="center-block">
                <label>
                    <span><i class="fa fa-phone"></i> <?= $text[$lang]["phone"] ?> </span>
                    <a href="tel:89062824201" rel="nofollow">+7 906 282-42-01</a>
                </label>
                <label>
                    <span><i class="fa fa-envelope"></i> E-mail: </span>
                    <a href="mailto:artik.alpha@ya.ru" rel="nofollow">artik.alpha@ya.ru</a>
                </label>
                <label>
                    <span><i class="fa fa-skype"></i> Skype: </span>
                    <a href="skype:art-man-1994?call" rel="nofollow">art-man-1994</a>
                </label>
                <label>
                    <span><i class="fa fa-vk"></i> VK: </span>
                    <a href="https://vk.com/artasches" target="_blank" rel="nofollow"><?= $text[$lang]["my-name"] ?> <?= $text[$lang]["my-surname"] ?></a>
                </label>
                <div class="padding-v">
                    <a href="#feedback" class="modal-open button"><?= $text[$lang]["call-mesages"]["feedback"] ?></a>
                </div>
            </div>
        </section>
    </div>
    <div class="c-modal" id="feedback">
        <div class="container">
            <div class="call-form">
                <h3><?= $text[$lang]["call-mesages"]["feedback"] ?></h3>
                <form method="POST" action="/" id="mail-form">
                    <label>
                        <input type="text" placeholder="<?= $text[$lang]["call-mesages"]["your-name"] ?>" name="entry.878354685" id="name">
                    </label>
                    <label>
                        <input type="email" placeholder="<?= $text[$lang]["call-mesages"]["your-e-mail"] ?>" name="entry.1171937833" id="email">
                    </label>
                    <label>
                        <textarea placeholder="<?= $text[$lang]["call-mesages"]["message"] ?>" name="entry.246362975" id="text"></textarea>
                    </label>
                    <label>
                        <input type="submit" value="<?= $text[$lang]["call-mesages"]["send"] ?>">
                    </label>
                </form>
                <div class="success">
                    <?= $text[$lang]["call-mesages"]["success"] ?>
                </div>
                <div class="error">
                    <?= $text[$lang]["call-mesages"]["fail"] ?>
                </div>
            </div>
        </div>
    </div>

    <!--[if lt IE 9]>
    <script src="/libs/html5shiv/es5-shim.min.js"></script>
    <script src="/libs/html5shiv/html5shiv.min.js"></script>
    <script src="/libs/html5shiv/html5shiv-printshiv.min.js"></script>
    <script src="/libs/respond/respond.min.js"></script>
    <![endif]-->
    <script src="/js/jquery-2.2.0.min.js" type="text/javascript"></script>
    <script src="/js/countUp.js" type="text/javascript"></script>
    <script src="/js/script.js" type="text/javascript"></script>

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function () {
                try {
                    w.yaCounter35320200 = new Ya.Metrika({
                        id: 35320200,
                        clickmap: true,
                        trackLinks: true,
                        accurateTrackBounce: true,
                        webvisor: true
                    });
                } catch (e) {
                }
            });

            var n = d.getElementsByTagName("script")[0],
                    s = d.createElement("script"),
                    f = function () {
                        n.parentNode.insertBefore(s, n);
                    };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/watch.js";

            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else {
                f();
            }
        })(document, window, "yandex_metrika_callbacks");
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/35320200" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->

    <!-- Google Analytics counter -->
    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-73709959-1', 'auto');
        ga('send', 'pageview');

    </script>
    <!-- /Google Analytics counter -->

</body>
</html>
