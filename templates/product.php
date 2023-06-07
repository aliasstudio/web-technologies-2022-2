<h2><?=$product['name']?></h2>

<div>
    <img src="/img/<?=$product['image']?>" alt="" width="100"><br>
    Цена: <?=$product['price']?><br>
    Описание: <?=$product['description']?><br>
    <button>Купить</button>
    <hr>
</div>

<h2>Отзывы</h2>
<form action="/public/product/addFeedback/" method="post" class="feedback-item">
    Оставьте отзыв: <br>
    <input type="text" name="name" placeholder="Ваше имя"><br>
    <input type="text" name="text" placeholder="Ваш отзыв"><br>
    <input type="hidden" name="productId" value="<?= $product['id'] ?>"><br>
    <input type="submit" value="Добавить">
</form>

<?php foreach ($feedback as $value): ?>
    <br>
    <div class="feedback-item">
        <form action="/public/product/updateFeedback/" method="post">
            <strong>Имя: <?=$value['name']?></strong>
            <br>
            <input type="text" name="text" placeholder="Ваш отзыв" value="<?=$value['text']?>">
            <input type="hidden" name="productId" value="<?= $product['id'] ?>">
            <input type="hidden" name="id" value="<?= $value['id'] ?>">
            <br>
            <br>
            <input type="submit" value="Обновить">
        </form>
        <form action="/public/product/deleteFeedback/" method="post" class="delete-form">
            <input type="hidden" name="productId" value="<?= $product['id'] ?>">
            <input type="hidden" name="id" value="<?= $value['id'] ?>">
            <input type="submit" value="Удалить">
        </form>
    </div>
<?php endforeach;?>
