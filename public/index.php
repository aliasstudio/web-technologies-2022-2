<?php
include '../config/config.php';

//$page = 'index';
//if (isset($_GET['page'])) {
//    $page = $_GET['page'];
//}

$url_array = explode('/', $_SERVER['REQUEST_URI']);

$action = $url_array[2] ?? '';

if ($url_array[1] == "") {
    $page = 'index';
} else {
    $page = $url_array[1];
}

$params = prepareParams($page,$action);

echo render($page, $params);



//$page = 'index';
//
//$params = [
//    'test' => 'test',
//    'title' => 'Главная',
//    'phone' => '+7 495 12-23-12'
//];

//echo renderTemplate('index', $params);

//echo renderTemplate(LAYOUTS_DIR . 'main', [
//    'title' => $params['title'],
//    'menu' => renderTemplate('menu'),
//    'content' => renderTemplate($page, $params)
//]);
