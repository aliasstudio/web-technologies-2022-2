<?php
define('TEMPLATES_DIR', '../templates/');
define('LAYOUTS_DIR', 'layouts/');

/* DB config */
define('HOST', 'localhost:8889');
define('USER', 'test');
define('PASS', '111-555');
define('DB', 'webis');

include "../engine/db.php";
include "../engine/controller.php";
include "../engine/render.php";
include "../models/catalog.php";
include "../models/menu.php";
include "../models/news.php";
include "../models/feedback.php";
