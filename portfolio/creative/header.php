<!DOCTYPE html>
<html>
    <head>
        <title>Creative</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href='https://fonts.googleapis.com/css?family=Exo+2:300,400,500,500italic,600,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Lobster&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
        <link href="scripts/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="scripts/slick/slick.css" rel="stylesheet" type="text/css"/>
        <link href="scripts/slick/slick-theme.css" rel="stylesheet" type="text/css"/>
        <link href="scripts/fancybox/jquery.fancybox.css" rel="stylesheet" type="text/css"/>
        <link href="template_styles.css" rel="stylesheet" type="text/css"/>

        <script src="scripts/jquery-2.1.4.min.js" type="text/javascript"></script>
        <script src="scripts/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="scripts/slick/slick.min.js" type="text/javascript"></script>
        <script src="scripts/fancybox/jquery.fancybox.pack.js" type="text/javascript"></script>
        <script src="scripts/fancybox/helpers/jquery.fancybox-media.js" type="text/javascript"></script>
        <script src="scripts/script.js" type="text/javascript"></script>
    </head>
    <body>
        <div class="body" id="top">
            <header class="header">
                <div class="container">
                    <div class="row">

                        <div class="logo b-r">
                            <a href="/">
                                <img src="images/logo.png" alt="Logo">
                            </a>
                        </div>


                        <div class="salon b-r">
                            <p>м. Фили ТЦ ФИЛИОН Алексфитнесс 5 этаж.</p>
                            <a href="index.php#contacts" class="dashed short-link">Схема проезда</a>
                            <div class="phone">
                                +7 917 500-99-65
                            </div>
                            <a href="#" class="btn btn-orange">Онлайн запись</a>
                        </div>


                        <div class="opening-time b-r">
                            <p class="little">Все наши салоны работают</p>
                            <p>ЕЖЕДНЕВНО</p>
                            <p class="big">с 10-00 до 21-00</p>
                        </div>


                        <div class="salon">
                            <p>М. Коломенская пр. Андропова 22 Алексфитнесс</p>
                            <a href="index.php#contacts" class="dashed short-link">Схема проезда</a>
                            <div class="phone">
                                +7 917 500-99-65
                            </div>
                            <a href="#" class="btn btn-orange">Онлайн запись</a>
                        </div>

                    </div>
                </div>
            </header>
            <nav>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">

                            <ul class="nav nav-justified">
                                <li class="hide-menu">
                                    <a href="#"><span class="glyphicon glyphicon-menu-hamburger"></span></a>
                                </li>
                                <li <?if($nav == 1){echo 'class="active"';}?>>
                                    <a href="index.php">Главная</a>
                                </li>
                                <li <?if($nav == 2){echo 'class="active"';}?>>
                                    <a href="services.php">Парикмахерские услуги</a>
                                </li>
                                <li>
                                    <a href="#service4" class="short-link">Кабинет маникюра</a>
                                </li>
                                <li>
                                    <a href="#service5" class="short-link">Косметология</a>
                                </li>
                                <li>
                                    <a href="#stilist" class="short-link">Стилист</a>
                                </li>
                                <li>
                                    <a href="#reviews" class="short-link">Отзывы</a>
                                </li>
                                <li>
                                    <a href="#gallery" class="short-link">Фото салонов</a>
                                </li>
                                <li>
                                    <a href="#certificates" class="short-link">Сертификаты</a>
                                </li>
                                <li>
                                    <a href="#contacts" class="short-link">Контакты</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>

