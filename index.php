<!-- Задание №1 -->
<?php
$a = 10;
$b = 20;

function operation($first, $second) {
    if ($first >= 0 && $second >= 0) {
        return $first - $second;
    } elseif ($first < 0 && $second < 0) {
        return $first * $second;
    } else {
        return $first + $second;
    }
}

echo operation($a, $b);
?>
<br>
<!-- Задание №2 -->
<?php
function operation2(int $a) {
    switch ($a) {
        case 0:
            echo $a++.' ';
        case 1:
            echo $a++.' ';
        case 2:
            echo $a++.' ';
        case 3:
            echo $a++.' ';
        case 4:
            echo $a++.' ';
        case 5:
            echo $a++.' ';
        case 6:
            echo $a++.' ';
        case 7:
            echo $a++.' ';
        case 8:
            echo $a++.' ';
        case 9:
            echo $a++.' ';
        case 10:
            echo $a++.' ';
        case 11:
            echo $a++.' ';
        case 12:
            echo $a++.' ';
        case 13:
            echo $a++.' ';
        case 14:
            echo $a++.' ';
        case 15:
            echo $a++.' ';
    }
}

operation2(7);
?>
<br>
<!-- Задание №3 -->
<?php
function opPlus($arg1, $arg2) {
    return $arg1 + $arg2;
}

function opMinus($arg1, $arg2) {
    return $arg1 - $arg2;
}

function opMultiply($arg1, $arg2) {
    return $arg1 * $arg2;
}

function opDivision($arg1, $arg2) {
    return $arg1 / $arg2;
}

//Задание №4

function mathOperation($arg1, $arg2, $operation) {
    switch ($operation) {
        case '+':
            return opPlus($arg1, $arg2);
        case '-':
            return opMinus($arg1, $arg2);
        case '*':
            return opMultiply($arg1, $arg2);
        case '/':
            return opDivision($arg1, $arg2);
    }
}

echo mathOperation(5, 3, '-');
?>
<br>

<!--Задание №5-->
<!--1-й способ в html верстке-->
<h4><?php echo date('Y')?></h4>

<!--2-й способ в верстке через required-->
<!--$date =  date('Y');-->
<!--require('site.php');-->

<!--3-ий способ через замену-->
<!--$content = file_get_contents('index.html');-->
<!--$content = str_replace("{{ date }}", $date, $content);-->
<!---->
<!--echo $content;-->

<br>

<!--Задание №6-->
<?php
function power($val, $pow) {
    if ($pow == 0) {
        return 1;
    } else {
        return power($val, $pow - 1) * $val;
    }
}

echo power(3, 4);
?>