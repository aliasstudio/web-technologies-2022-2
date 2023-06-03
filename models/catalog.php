<?php
function getCatalog() {
    return getAssocResult("SELECT id, name, image, price, description FROM products");
}