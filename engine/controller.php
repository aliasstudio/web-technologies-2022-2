<?php

function prepareParams($page, $action) {

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
            doFeedbackAction($action);
            $id = (int) $_GET['id'];
            $params['product'] = getProduct($id);
            $params['feedback'] = getFeedback($id);
            break;

        case 'apicatalog':
            echo json_encode(getCatalog(), JSON_UNESCAPED_UNICODE);
            die();

        default:
            echo '404';
            die();
    }

    return $params;
}
