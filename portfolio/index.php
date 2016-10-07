<!DOCTYPE html>
<html>
    <head>
        <title>Projects</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href='http://fonts.googleapis.com/css?family=Roboto:100' rel='stylesheet' type='text/css'>
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon">
        <?
        require_once 'get-portfolio.php';
        $xml = getPortfolioFromXML("portfolio.xml");
        $portfolio = constructOne($xml, $lang);

        $allimages = glob("0-dir/*");
        $img = array();

        foreach ($allimages as $value) {
            if (stripos($value, "jpg")) {
                $img[] = $value;
            }
        }

        $rnd = rand(0, count($img) - 1);

        $bg = $img[$rnd];
        ?>
        <style>
            *{
                font-family: 'Roboto', sans-serif;
                font-weight: 100;
                box-sizing: border-box;
            }
            body{
                background: #000 url(<? echo $bg; ?>) no-repeat;
                background-attachment: fixed;
                font-size: 36pt;
                background-size: cover;
                margin:0;
            }
            .body{
                padding: 0;
            }
            .link{
                text-decoration: none;
                display:block;
                width: 100%;
                background: rgba(0,0,0,0.9) url(https://d37k5ijshdq7i4.cloudfront.net/assets/homepage/a-hover-bg-f14bf430e71b103b150c8817b90c5641.png) no-repeat;
                background-position: 90%;
                border-bottom: 1px solid rgba(120,120,120,0.5);
                padding: 40px;
                font-size: 80%;
                color: #fff;
                opacity: .7;
                transition: all 250ms ease-in-out;
                text-transform:uppercase;
            }
            .link:hover{
                color: #f33;
                cursor: pointer;
                padding-left:100px;
                opacity: 1;
                background-position: 95%;
            }
            .head{
                width: 100%;
                background: rgba(0,0,0,0.9);
                border-bottom: 1px solid rgba(255,255,255,0.7);
                padding: 35px 20px;
                color: #fff;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="body">
            <div class="head">
                / Portfolio /
            </div>

            <?= $portfolio ?>
        </div>
    </body>
</html>
