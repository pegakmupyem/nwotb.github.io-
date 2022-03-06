<?php 
    $subject = "This is my UDID from iOS device";
    $body  = "Hello<br /> This is my UDID: {$_GET['UDID']} <br />";
    $body .= "Device product: {$_GET['DEVICE_PRODUCT']} <br />";
    $body .= "Device version: {$_GET['DEVICE_VERSION']} <br />";
    $body .= "Device name: {$_GET['DEVICE_NAME']} <br />";
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>UDID</title>
        <meta name="viewport" content="width=device-width" />
    </head>
    <body>
        <div>
            <h1>Скопируйте UDID и отправьте его мне</h1>
                <p>UDID: <button style="font-size:13px;" onclick="copy0ne('UDID')"><?php echo $_GET['UDID']; ?> </button></p>
                
                <p>
<button style="font-size:13px;" onclick="window.location.href = 'https://t.me/pegakmop';">отправить udid</button>
                </p>
                
                <p>
<button style="font-size:13px;" onclick="window.location.href = 'https://udidios.000webhostapp.com';">Вернуться на главную страницу</button>
                </p>
        </div>
    </body>
</html>
