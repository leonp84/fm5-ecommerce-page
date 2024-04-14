let itemNum = 0

function updateItemNum() {
    $('#item-num-span').text(itemNum)
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

$('.carousel-control-prev').on('click', function() {
    $('.carousel').carousel('prev')
})

$('.carousel-control-next').on('click', function() {
    $('.carousel').carousel('next')
})

$('#shopping-cart').on('click', function() {
    $('#show-cart').modal('show')
});

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


