<?php
include('./lib/ImageResize.php');
use \Gumlet\ImageResize;
use \Gumlet\ImageResizeException;

function count_files($dir){
    $c=0; // количество файлов. Считаем с нуля
    $d=dir($dir); //
    while($str=$d->read()){
        if($str{0}!='.'){
            if(is_dir($dir.'/'.$str)) $c+=count_files($dir.'/'.$str);
            else $c++;
        };
    }
    $d->close(); // закрываем директорию
    return $c;
}

$logsCount = count_files('./log/');
$filename = 'log/log'.$logsCount.'.txt';
$lines = count(file($filename));

if($lines >= 10) {
    $filename = 'log/log'.($logsCount + 1).'.txt';
}

$text = 'Посещение страницы - '.date('H:i:s').PHP_EOL;
file_put_contents($filename, $text, FILE_APPEND);

function pick_file($file){
    if($file['name'] == '')
        return 'Файл не выбран';

    $getMime = explode('.', $file['name']);
    $mime = strtolower(end($getMime));
    $types = array('jpg', 'png', 'gif', 'bmp', 'jpeg');

    if(!in_array($mime, $types))
        return 'Недопустимый тип файла';

    // 5 мб
    $maxSize = 5 * 1024 * 1024;
    $size = filesize($file['tmp_name']);

    if($size > $maxSize) {
        return 'Размер файла слишком большой';
    }

    return true;
}

/**
 * @throws ImageResizeException
 */
function upload_file($file){
    copy($file['tmp_name'], 'images/big/'.$file['name']);

    $image = new ImageResize('images/big/'.$file['name']);
    $image -> resizeToWidth(300);
    $image -> save('images/small/'.$file['name']);

    header('Location: /index.php');
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
        <div class="wrapper">
        <?php
        if(isset($_FILES['file'])) {
            $check = pick_file($_FILES['file']);

            if($check === true){
                upload_file($_FILES['file']);
            }
            else{
                echo "<h3>$check</h3>";
            }
        }
        ?>
        <form method="post" enctype="multipart/form-data">
            <input type="file" name="file">
            <input type="submit" value="Загрузить файл">
        </form>
        <div class="gallery__wrapper">
            <?php
                $files = array_diff(scandir('images/big'), array('.', '..'));

                foreach($files as $file) {
                    $preview = 'images/small/'.$file;
                    $image = 'images/big/'.$file;

                    echo '<div class="gallery-item">
                        <a href="'.$image.'" target="_blank">
                            <img src="'.$preview.'"/>
                        </a>
                      </div>';
                }
            ?>
        </div>
    </div>
</body>
</html>