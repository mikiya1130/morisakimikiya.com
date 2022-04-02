<?php
# 参考：https://www.webdesignleaves.com/pr/php/php_phpmailer.php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$json = file_get_contents('php://input');
$data = json_decode($json, true);
$datetime = date("Y-m-d H:i");

require_once __DIR__.'/library/vendor/autoload.php';
require_once __DIR__.'/library/vendor/phpmailer/phpmailer/language/phpmailer.lang-ja.php';
include_once __DIR__.'/env/mail_vars.php';

mb_language("japanese");
mb_internal_encoding("UTF-8");

$mail = new PHPMailer(true);

$mail->CharSet = "iso-2022-jp";
$mail->Encoding = "7bit";
$mail->setLanguage('ja', 'vendor/phpmailer/phpmailer/language/');

try {
    $mail->isSMTP();
    $mail->Host       = MAIL_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = MAIL_USER;
    $mail->Password   = MAIL_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = MAIL_PORT;

    // From
    $mail->setFrom(MAIL_FROM, mb_encode_mimeheader($data['name']));
    // To
    $mail->addAddress($data['email']);
    $mail->addBCC(MAIL_BCC);

    // Body
    $body = <<<EOS
    {$data['name']} 様
    この度は、お問い合わせいただき誠にありがとうございます。
    下記の内容でお問い合わせを受け付けました。

    お問い合わせ日時：$datetime
    お名前：{$data['name']}
    メールアドレス：{$data['email']}
    ＜お問い合わせ内容＞
    {$data['text']}
    EOS;
    $mail->isHTML(false);
    $mail->Subject = mb_encode_mimeheader('お問い合わせ[morisakimikiya.com]');
    $mail->Body  = mb_convert_encoding($body,"JIS","UTF-8");

    $mail->send();

    echo json_encode(array('status' => 'ok'));
} catch (Exception $e) {
    error_log($mail->ErrorInfo . "\n", 3, MAIL_ERROR_LOG);
    echo json_encode(array('status' => 'error'));
}
