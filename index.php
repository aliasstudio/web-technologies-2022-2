<?php
include './config/config.php';

$url_array = explode('/', $_SERVER['REQUEST_URI']);
if ($url_array[2] == "") {
    $page = 'index';
} else {
    $page = $url_array[2];
}

$params = [];

switch ($page) {
    case 'index':
        $params['title'] = 'Главная';
        break;

    case 'catalog':
        $params['title'] = 'Каталог';
        $params['catalog'] = getCatalog();
        break;

    case 'about':
        $params['title'] = 'about';
        $params['phone'] = 444333;
        break;

    case 'product':
        $id = (int) $_GET['id'];
        $params['item'] = getProduct($id);
        break;

    case 'apicatalog':
        echo json_encode(getCatalog(), JSON_UNESCAPED_UNICODE);
        die();

    default:
        echo "404";
        die();
}

echo render($page, $params);
