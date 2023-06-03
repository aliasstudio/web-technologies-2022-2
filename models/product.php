<?php
function getProduct($id) {
    return getAssocResult("SELECT id, name, image, price, description FROM products WHERE id = {$id}")[0];
}


function getFeedback($id) {
    $sql = "SELECT * FROM feedbacks WHERE productId = {$id} ORDER BY id DESC";
    return getAssocResult($sql);
}

function addFeedback() {
    extract($_POST);
    $sql = "INSERT INTO `feedbacks` (`id`, `productId`, `name`, `text`) VALUES (NULL, '{$productId}', '{$name}', '{$text}')";

    executeSql($sql);
    header("Location: /public/product/?id={$productId}");
}

function updateFeedback() {
    extract($_POST);
    $sql = "UPDATE `feedbacks` SET `name`='{$name}',`text`='{$text}' WHERE id = {$id}";

    executeSql($sql);
    header("Location: /public/product/?id={$productId}");
}

function deleteFeedback() {
    extract($_POST);
    $sql = "DELETE FROM `feedbacks` WHERE id = '{$id}'";

    executeSql($sql);
    header("Location: /public/product/?id={$productId}");
}

function doFeedbackAction($action) {
    if($action === 'addFeedback') {
        addFeedback();
        die();
    }
    if($action === 'updateFeedback') {
        updateFeedback();
        die();
    }

    if($action === 'deleteFeedback') {
        deleteFeedback();
        die();
    }
}