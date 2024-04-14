let itemNum = 0

function updateItemNum() {
    $('#item-num-span').text(itemNum)
    console.log()
}

$('#plus').on('click', function() {
    itemNum++;
    updateItemNum()
})

$('#minus').on('click', function() {
    if (itemNum != 0) {
        itemNum--; }
    updateItemNum()
})

$('#add-to-cart').on('click', function() {
    if (parseInt ($('#item-num-span').text()) > 0) {
    $('#shopping-cart-contents').html(itemsInCart)
    $('#cart-items-number').text(parseInt ($('#cart-items-number').text()) + itemNum)
    $('#cart-items-number').css('display', 'inline-block')
    $('#empty-my-cart').on('click', function() {
        $('#shopping-cart-contents').html(emptyCart)
        $('#cart-items-number').css('display', 'none')
        $('#cart-items-number').text('0')
        itemNum = 0

    })}
})






// ##########################################

$('#shopping-cart').on('click', function() {
    $('#show-cart').modal('show')
});


$('.carousel-control-prev').on('click', function() {
    $('.carousel').carousel('prev')
})

$('.carousel-control-next').on('click', function() {
    $('.carousel').carousel('next')
})

$('#main-image').on('click', function() {
    $('#lightbox').modal('show')
})

$('#close-modal').on('click', function() {
    $('#show-cart').modal('hide')
});

$('#menu-button').on('click', function() {
    const bsOffcanvas = new bootstrap.Offcanvas('#mobile-menu')
    bsOffcanvas.show()
});

$('#im1').on('click', function() {
    $('.img-div').css('border', 'none')
    $('.img-p').css('opacity', '1')
    $(this).children().css('opacity', '0.2')
    $(this).css({
        'border': '3px solid hsl(26, 100%, 55%)',
        'border-radius': '8px'})
    $('#main-image').css("background-image", "url('assets/images/image-product-1.jpg')");
})

$('#im2').on('click', function() {
    $('.img-div').css('border', 'none')
    $('.img-p').css('opacity', '1')
    $(this).children().css('opacity', '0.2')
    $(this).css({
        'border': '3px solid hsl(26, 100%, 55%)',
        'border-radius': '8px'})
    $('#main-image').css("background-image", "url('assets/images/image-product-2.jpg')");
})

$('#im3').on('click', function() {
    $('.img-div').css('border', 'none')
    $('.img-p').css('opacity', '1')
    $(this).children().css('opacity', '0.2')
    $(this).css({
        'border': '3px solid hsl(26, 100%, 55%)',
        'border-radius': '8px'})
    $('#main-image').css("background-image", "url('assets/images/image-product-3.jpg')");
})

$('#im4').on('click', function() {
    $('.img-div').css('border', 'none')
    $('.img-p').css('opacity', '1')
    $(this).children().css('opacity', '0.2')
    $(this).css({
        'border': '3px solid hsl(26, 100%, 55%)',
        'border-radius': '8px'})
    $('#main-image').css("background-image", "url('assets/images/image-product-4.jpg')");
})

$('#im1-1').on('click', function() {
    $('.img-div').css('border', 'none')
    $('.img-p').css('opacity', '1')
    $(this).children().css('opacity', '0.2')
    $(this).css({
        'border': '3px solid hsl(26, 100%, 55%)',
        'border-radius': '8px'})
    $('#main-image-lightbox').css("background-image", "url('assets/images/image-product-1.jpg')");
})

$('#im2-2').on('click', function() {
    $('.img-div').css('border', 'none')
    $('.img-p').css('opacity', '1')
    $(this).children().css('opacity', '0.2')
    $(this).css({
        'border': '3px solid hsl(26, 100%, 55%)',
        'border-radius': '8px'})
    $('#main-image-lightbox').css("background-image", "url('assets/images/image-product-2.jpg')");
})

$('#im3-3').on('click', function() {
    $('.img-div').css('border', 'none')
    $('.img-p').css('opacity', '1')
    $(this).children().css('opacity', '0.2')
    $(this).css({
        'border': '3px solid hsl(26, 100%, 55%)',
        'border-radius': '8px'})
    $('#main-image-lightbox').css("background-image", "url('assets/images/image-product-3.jpg')");
})

$('#im4-4').on('click', function() {
    $('.img-div').css('border', 'none')
    $('.img-p').css('opacity', '1')
    $(this).children().css('opacity', '0.2')
    $(this).css({
        'border': '3px solid hsl(26, 100%, 55%)',
        'border-radius': '8px'})
    $('#main-image-lightbox').css("background-image", "url('assets/images/image-product-4.jpg')");
})

// ####################################################

itemsInCart = `
<div class="row d-flex justify-content-between align-items-center">
<div class="col-2">
    <img src="assets/images/image-product-1-thumbnail.jpg" class="rounded" height="80" alt="">
</div>
<div class="col-5">
    <span class="small text-body-secondary">Fall Limited Edition Sneakers<br>$125.00 x 0<strong>
        $0</strong></span>
</div>
<div class="col-1" id="empty-my-cart">
    <img src="assets/images/icon-delete.svg" height="20" alt="">
</div>
<div class="col-11 d-flex mt-3 justify-content-center">
    <div class="rounded container-box justify-content-center mt-2 orange-bg checkout-button" id="checkout">
    <img src="assets/images/icon-cart-white.svg" class="me-1" alt="">
    <span class="fw-bolder text-white ms-1">Checkout</span>
    </div>
</div>
</div>`

emptyCart = `
<div id="empty-cart">
Your Cart is empty
</div>`