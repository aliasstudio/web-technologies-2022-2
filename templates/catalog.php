<h2>Каталог</h2>

<div>
    <?php foreach ($catalog as $item): ?>
        <div">
            <span onclick="redirect('<?= $item['id'] ?>')"><?=$item['name']?></span><br>
            <img src="/img/<?=$item['image']?>" alt="" width="100" onclick="redirect('<?= $item['id'] ?>')"><br>
            Цена: <?=$item['price']?><br>
            <button>Купить</button>
            <hr>
        </div>
    <?php endforeach; ?>

</div>

<script>
    function redirect(id) {
        location.href = `/public/product/?id=${id}`;
    }
</script>