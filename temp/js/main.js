$(document).ready(function() {
    $(".main-news-slider").slick({
        infinite: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
        autoplay: false,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    });
    $(".all-news_slider").slick({
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $(".all-events_slider").slick({
        infinite: true,
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $(".all-result_slider").slick({
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $(".popular-bet_slider").slick({
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $(".navbar-toggler").click(function () {
        $(".navbar-collapse").addClass("active");
    });
    $(document).mouseup(function (e) {
        var div = $(".navbar-collapse");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass("active");
        }
    });

    // Стилизация выпадающего списка
    $('#kind-of-sport').styler();
});
