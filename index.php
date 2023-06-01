<?php
$title = "Название";
$header = "Заголовок";
$currentYear = date('Y');

date_default_timezone_set('Asia/Yekaterinburg');

function get_Time() {
    list($hour, $minute) = explode(':', date('H:i'));

    return $hour
        .' '
        .getNumEnding($hour, array('час', 'часа', 'часов'))
        .' : '
        .$minute
        .' '
        .getNumEnding($minute, array('минута', 'минуты', 'минут'));
}

function getNumEnding($number, $endingArray)
{
    $number = $number % 100;
    if ($number>=11 && $number<=19) {
        $ending=$endingArray[2];
    }
    else {
        $i = $number % 10;
        if($i == 1) {
            $ending=$endingArray[0];
        } else if ($i > 1 && $i <= 4) {
            $ending = $endingArray[1];
        } else {
            $ending = $endingArray[2];
        }
    }
    return $ending;
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title?></title>
</head>
<body>
<h1><?php echo $header?></h1>
<span><?php echo $currentYear?></span>

<div>
    <?php echo get_Time() ?>
</div>

</body>
</html>