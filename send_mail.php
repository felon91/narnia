<?php

require_once "send_mail_smtp.php";

if($_POST['name'] != ""){ 
	if ($_POST['phone'] !="") {
		 if($_POST['hide'] == "") {

     $mailSMTP = new SendMailSmtpClass('septik-kupit-spb@yandex.ru', 'testsmtpseptik', 'ssl://smtp.yandex.ru', 'Консультация septik-kupit-spb.ru', 465);
         // создаем экземпляр класса
        // $mailSMTP = new SendMailSmtpClass('логин', 'пароль', 'хост', 'имя отправителя');

    // заголовок письма
    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=utf-8\r\n"; // кодировка письма
    $headers .= "From: Narnia <info@centr-narnia.ru>\r\n"; // от кого письмо


    $theme = "Заявка с лендинга (Нарния)";
	$msg = "";
	$msg .= "Имя: ".$_POST['name']."\r\n";
    $msg .= "Телефон: ".$_POST['phone']."\r\n";
	$msg .= "\r\n";
	$msg .= "Источник трафика: ".$_SERVER['HTTP_REFERER']."\r\n";


	$result = $mailSMTP->send('felon_91@mail.ru', $theme, $msg, $headers); // отправляем письмо

	$status = 'success';
	//$message = 'Спасибо! Ваша заявка принята. Мы мы свяжемся с Вами указанным способом в течение часа.';

		} else {
			$status = 'error';
			$message = 'Спам';
			$type = 'spam';
		}
	} else {
		$status = 'error';
		$message = 'Введите телефон';
		$type = 'phone';
		
		}
	} else {
		
			$status = 'error';
			$message = 'Введите имя';
			$type = 'name';
		}
	


	
	//возвращаем ответ json
	$data = array(
		'status' => $status,
		'message' => $message,
		'type' => $type
	);
	
	echo json_encode($data);
	exit;

?>
