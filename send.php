<?php

date_default_timezone_set('Europe/Moscow');

$current_domain = $_SERVER['SERVER_NAME'];

$sender = 'sender@this-site-domain.tld';
$recipient = 'recipient@this-site-domain.tld';

if (isset($_POST["user_email"])) {
  $user_name  = filter_var($_POST["user_name"]);
  $user_email = filter_var($_POST["user_email"]);

  $answer_to_question_1 = filter_var($_POST["question_1"]);
  $answer_to_question_2 = filter_var($_POST["question_2"]);
  $answer_to_question_3 = filter_var($_POST["question_3"]);
  $answer_to_question_4 = filter_var($_POST["question_4"]);

  $headers = 'From:' . $sender;

  $subject = "Form from user: " . $user_name;

  $message  = "User name: " . $user_name . "\n";
  $message .= "\n\nUser email: " . $user_email . "\n";
  $message .= "\n\n- - - - - -\n";
  $message .= "\n\nAnswers: \n";
  $message .= "\n\nQuestion #1: " . $answer_to_question_1 . "\n";
  $message .= "\n\nQuestion #2: " . $answer_to_question_2 . "\n";
  $message .= "\n\nQuestion #3: " . $answer_to_question_3 . "\n";
  $message .= "\n\nQuestion #4: " . $answer_to_question_4 . "\n";
  $message .= "\n\n- - - - - -\n";
  $message .= "\n\nSent from site: " . $current_domain . "\n";
} else {
  $subject = "php mail test";
  $message = "php test message";
  $headers = 'From:' . $sender;
}

if (mail($recipient, $subject, $message, $headers)) {
  echo "Message accepted";
} else {
  echo "Error: Message not accepted";
}
