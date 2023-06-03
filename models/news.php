<?php
function getNews() {
    return getAssocResult("SELECT id, title FROM news");
}

function getOneNews($id) {
    return getOneResult("SELECT title, text FROM news WHERE id = {$id}");
}
