
$('.partner.owl-carousel').owlCarousel({
    loop: true,
    stagePadding: 5,
    margin: 70,
    nav: true,
    responsive: {
        0: {
            items: 4,
            stagePadding: 20,
            margin: 30
        },
        768: {
            items: 6,
            margin: 20
        },
    }
})
$('.product.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            loop: false,
            items: 1,
            stagePadding: 35
        },
        425: {
            loop: false,
            items: 1,
            stagePadding: 60
        },
        576: {
            loop: false,
            items: 1,
            stagePadding: 90
        },
        768: {
            loop: false,
            items: 1,
            stagePadding: 110
        },
        1024: {
            items: 3
        }
    }
})
$('.service-slide.owl-carousel').owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            loop: false,
            items: 1,
            stagePadding: 50
        },
        576: {
            loop: false,
            items: 1,
            stagePadding: 60
        },
        1024: {
            items: 3
        }
    }
})

$('.business-slide.owl-carousel').owlCarousel({
    loop: true,
    stagePadding: 0,
    margin: 50,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
})

$(function () {
    $(window).bind("resize", function () {
        if ($(this).width() < 769) {
            $('#btn').removeClass('on-d').addClass('off')
        } else {
            $('#btn').removeClass('off').addClass('on-d')
        }
    }).resize();
})

$(function () {
    $(window).bind("resize", function () {
        if ($(this).width() < 769) {
            $('#new-btn').removeClass('off').addClass('on-f')
        } else {
            $('#new-btn').removeClass('on-f').addClass('off')
        }
    }).resize();
})


