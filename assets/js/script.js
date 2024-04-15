let itemNum = 0;
let currentImage = 1;

$('#main-image').on('click', function () {
    if (window.screen.width > 1400) {
        $('#lightbox').modal('show');
    }
});

$(".nav-link").hover(function () {
    $(this).css('border-bottom', '9px solid hsl(26, 100%, 55%)');
}, function () {
    $(this).css('border-bottom', '9px solid transparent');
});

$("#avatar").hover(function () {
    $(this).css('border', '3px solid hsl(26, 100%, 55%)');
}, function () {
    $(this).css('border', '3px solid transparent');
});

$(".img-p").on('mouseenter', function() {
    if ($(this).css('opacity') !== '0.2') {
        $(this).css('opacity', '0.5');
    }
});

$(".img-p").on('mouseout', function() {
    if ($(this).css('opacity') !== '0.2') {
        $(this).css('opacity', '1');
    }
});

$('#close-lightbox').on('click', function () {
    $('#lightbox').modal('hide');
});

function updateItemNum() {
    $('#item-num-span').text(itemNum);
}

$('#plus').on('click', function () {
    itemNum++;
    updateItemNum();
});

$('#minus').on('click', function () {
    if (itemNum != 0) {
        itemNum--;
    }
    updateItemNum();
});

$('#add-to-cart').on('click', function () {
    if (parseInt($('#item-num-span').text()) > 0) {
        $('#cart-items-number').text(parseInt($('#cart-items-number').text()) + itemNum);
        $('#cart-items-number').css('display', 'inline-block');
        $('#item-num-span').text('0');
        $('#shopping-cart-contents').html(itemsInCart());
        $('#empty-my-cart').on('click', function () {
            $('#shopping-cart-contents').html(emptyCart);
            $('#cart-items-number').css('display', 'none');
            $('#cart-items-number').text('0');
        });
    }
    itemNum = 0;
});

$('#shopping-cart').on('click', function () {
    $('#show-cart').modal('show');
});

$('.carousel-control-prev').on('click', function () {
    $('#carouselExampleControls').carousel('prev');
});

$('.carousel-control-next').on('click', function () {
    $('#carouselExampleControls').carousel('next');
});

$('#close-modal').on('click', function () {
    $('#show-cart').modal('hide');
});

$('#menu-button').on('click', function () {
    const bsOffcanvas = new bootstrap.Offcanvas('#mobile-menu');
    bsOffcanvas.show();
});

$('#im1').on('click', function () {
    currentImage = 1;
    callNumberFunction();
    $('.img-div').css('border', 'none');
    $('.img-p').css('opacity', '1');
    $('#im1').children().css('opacity', '0.2');
    $('#im1').css({
        'border': '3px solid hsl(26, 100%, 55%)',
        'border-radius': '8px'
    });
    $('#main-image').css("background-image", "url('assets/images/image-product-1.jpg')");
});

$('#im2').on('click', function () {
    currentImage = 2;
    callNumberFunction();
    $('.img-div').css('border', 'none');
    $('.img-p').css('opacity', '1');
    $('#im2').children().css('opacity', '0.2');
    $('#im2').css({
        'border': '3px solid hsl(26, 100%, 55%)',
        'border-radius': '8px'
    });
    $('#main-image').css("background-image", "url('assets/images/image-product-2.jpg')");
});

$('#im3').on('click', function () {
    currentImage = 3;
    callNumberFunction();
    $('.img-div').css('border', 'none');
    $('.img-p').css('opacity', '1');
    $('#im3').children().css('opacity', '0.2');
    $('#im3').css({
        'border': '3px solid hsl(26, 100%, 55%)',
        'border-radius': '8px'
    });
    $('#main-image').css("background-image", "url('assets/images/image-product-3.jpg')");
});

$('#im4').on('click', function () {
    currentImage = 4;
    callNumberFunction();
    $('.img-div').css('border', 'none');
    $('.img-p').css('opacity', '1');
    $('#im4').children().css('opacity', '0.2');
    $('#im4').css({
        'border': '3px solid hsl(26, 100%, 55%)',
        'border-radius': '8px'
    });
    $('#main-image').css("background-image", "url('assets/images/image-product-4.jpg')");
});

function showCurrentImage() {
    let nextImage = `url('assets/images/image-product-${currentImage}.jpg')`;
    $('#main-image-lightbox').css("background-image", nextImage);
}

$('#lightbox-next').on('click', function () {
    if (currentImage == 4) {
        currentImage = 1;
    } else {
        currentImage++;
    }
    callNumberFunction();
});

$('#lightbox-prev').on('click', function () {
    if (currentImage == 1) {
        currentImage = 4;
    } else {
        currentImage--;
    }
    callNumberFunction();
});

function callNumberFunction() {
    switch (currentImage) {
        case 1:
            showOne();
            break;
        case 2:
            showTwo();
            break;
        case 3:
            showThree();
            break;
        case 4:
            showFour();
            break;
    }
}

$('#im1-1').on('click', showOne);

function showOne() {
    $('.img-divl').css('border', '3px solid black');
    $('.img-p').css('opacity', '1');
    $('#im1-1').children().css('opacity', '0.2');
    $('#im1-1').css({
        'border': '3px solid hsl(26, 100%, 55%)',
        'border-radius': '8px'
    });
    currentImage = 1;
    showCurrentImage();
}

$('#im2-2').on('click', showTwo);

function showTwo() {
    $('.img-divl').css('border', '3px solid black');
    $('.img-p').css('opacity', '1');
    $('#im2-2').children().css('opacity', '0.2');
    $('#im2-2').css({
        'border': '3px solid hsl(26, 100%, 55%)',
        'border-radius': '8px'
    });
    currentImage = 2;
    showCurrentImage();
}

$('#im3-3').on('click', showThree);

function showThree() {
    $('.img-divl').css('border', '3px solid black');
    $('.img-p').css('opacity', '1');
    $('#im3-3').children().css('opacity', '0.2');
    $('#im3-3').css({
        'border': '3px solid hsl(26, 100%, 55%)',
        'border-radius': '8px'
    });
    currentImage = 3;
    showCurrentImage();
}

$('#im4-4').on('click', showFour);

function showFour() {
    $('.img-divl').css('border', '3px solid black');
    $('.img-p').css('opacity', '1');
    $('#im4-4').children().css('opacity', '0.2');
    $('#im4-4').css({
        'border': '3px solid hsl(26, 100%, 55%)',
        'border-radius': '8px'
    });
    currentImage = 4;
    showCurrentImage();
}

function itemsInCart() {
    let total = parseInt($('#cart-items-number').text());
    let totalText = `
    <div class="row d-flex justify-content-between align-items-center">
    <div class="col-2">
        <img src="assets/images/image-product-1-thumbnail.jpg" class="rounded" height="80" alt="">
    </div>
    <div class="col-5">
        <span class="small text-body-secondary">Fall Limited Edition Sneakers<br>$125.00 x ${total}<strong>
            $${total * 125}</strong></span>
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
    </div>`;
    return totalText;
}

let emptyCart = `
<div id="empty-cart">
Your Cart is empty
</div>`;
