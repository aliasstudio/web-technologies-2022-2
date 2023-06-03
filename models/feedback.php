<?php

function getAllFeedback() {
    $sql = "SELECT * FROM feedback ORDER BY id DESC";
    return getAssocResult($sql);
}

function addFeedback() {
    var_dump($_POST);
    die();
}

function deleteFeedback() {
    var_dump($_POST);
    die();
}

function doFeedbackAction($action) {
    if($action === 'add') {
        addFeedback();
        die();
    }
    if($action === 'save') {
        var_dump($_POST);
        die();
    }

    if($action === 'delete') {
        deleteFeedback();
        die();
    }
}
