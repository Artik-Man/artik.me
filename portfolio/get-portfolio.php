<?

function getPortfolioFromXML($xml) {
    $file = file_get_contents($xml, true);
    $object = simplexml_load_string($file);
    return $object;
}

function constructOne($array, $lang) {
    $out = "";
    $i = 0;
    foreach ($array as $value) {
        $out.= '<a href="' . $value->link . '" class="link" target="_blank">' . $value->title->en . '</a>';
        $i++;
    }
    return $out;
}

function constructTwo($array, $lang) {
    $out = "";
    $i = 0;
    foreach ($array as $value) {
        $out.= '
                <div class="col-sm-4 col-xs-6 col-xxs-12">    
                    <a href="' . $value->link . '" target="_blank">
                        <img src="http://portfolio.artik-man.ru/' . $value->image .
                '" alt="' . $value->title->$lang .
                '" title="' . $value->title->$lang . '">
                        <p><span>' . $value->title->$lang . '</span></p>
                    </a>
                </div>';
        $i++;
    }
    return $out;
}
