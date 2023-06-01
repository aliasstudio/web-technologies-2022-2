<?php
function pick_file($file){
    if($file['name'] == '')
        return 'Файл не выбран';

    $getMime = explode('.', $file['name']);
    $mime = strtolower(end($getMime));
    $types = array('jpg', 'png', 'gif', 'bmp', 'jpeg');

    if(!in_array($mime, $types))
        return 'Недопустимый тип файла';

    return true;
}

function upload_file($file){
    copy($file['tmp_name'], 'images/' . mt_rand(0, 10000).'_'.$file['name']);
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
                echo "<h3>Файл успешно загружен!</h3>";
            }
            else{
                echo "<h3>$check</h3>";
            }
        }
        ?>
        <form method="post" enctype="multipart/form-data">
            <input type="file" name="file">
            <input type="submit" value="Загрузить файл!">
        </form>
        <div class="gallery__wrapper">
            <?php
                $path = 'images';
                $files = array_diff(scandir($path), array('.', '..'));

                foreach($files as $file) {
                    $preview = $path.'/'.$file;
                    $image = $path.'/'.$file;

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