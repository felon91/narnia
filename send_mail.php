<?php

if($_POST['name'] != ""){ 
	if ($_POST['phone'] !="") {
		 if($_POST['hide'] == "") {


	$to = "felon_91@mail.ru"; // почта, на которую будет приходить письмо
	$from = "info@noreply.ru";
	$headers = "Reply-To: noreply@".$_SERVER['SERVER_NAME']."\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/plain; charset=UTF-8 \r\n";
	$headers .= "From: ". $from ." \r\n";
	$subject = "Заявка с лендинга (Нарния)";

	$msg = "";
	$msg .= "Заявка с лендинга ".$_SERVER['SERVER_NAME']."\r\n";
	$msg .= "Имя: ".$_POST['name']."\r\n";
	$msg .= "Телефон: ".$_POST['phone']."\r\n";

	mail($to, $subject, $msg, $headers);
	
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
