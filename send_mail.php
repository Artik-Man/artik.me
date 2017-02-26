<?php


phpinfo();
return;
// 1st - check xhr
if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) || $_SERVER['HTTP_X_REQUESTED_WITH'] !== 'XMLHttpRequest') {
    header('HTTP/1.1 404 Not Found');
    die();
}

$err = false;

$dataName = filter_input(INPUT_POST,'entry_878354685');
$dataEmail =filter_input(INPUT_POST,'entry_1171937833');
$dataMessage = filter_input(INPUT_POST,'entry_246362975');

empty($dataName) ? $err = true : '';
empty($dataEmail) ? $err = true : '';
empty($dataMessage) ? $err = true : '';

$mailBody = "
Имя: <strong>$dataName</strong><br />
Email: <strong>$dataEmail</strong><br />
Сообщение: $dataMessage";

if ($err) {
    header('HTTP/1.1 404 Not Found');
    die();
}

$arResult = array(
    'status' => 'ERROR'
);

$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';                       // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'no-reply@artik.me';                // SMTP username
$mail->Password = '0987654321';                       // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
$mail->setFrom('no-reply@artik.me', 'Artik.me');

$mail->addAddress('mail@artik.me');                   // Name is optional
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $dataName . ' отправил сообщение на сайте';

$mail->Body = $mailBody;

if (!$mail->send()) {
    $arResult['msg'] = $mail->ErrorInfo;
} else {
    $arResult['status'] = 'OK';
}

header('Conetnt-Type: application/json');
echo json_encode($arResult);