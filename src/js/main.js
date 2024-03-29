/*GET NEWS API*/
const parsedNewsJson = $.ajax({
    url: 'news.json',
    async: false,
    dataType: 'json',
    success: function(data){
        return data;
    }
});

console.log(parsedNewsJson);


/*
const topArticles = parsedNews.filter(articles => articles.result.source.ranking.importanceRank > 90);
console.log(topArticles);
*/


$(document).ready(function() {
    var preloader = $('.preloader'),
        loader = preloader.find('.cssload-loader');
    loader.fadeOut();
    preloader.delay(350).fadeOut('slow');

    /*LAUNCH SLIDER*/
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
    $(".all-news_slider, .all-result_slider, .popular-bet_slider").slick({
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $(".all-events_slider").slick({
        infinite: true,
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1326,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*OPEN MENU ON MOBILE AND TABLET*/
    $(".navbar-toggler").click(function () {
        $(".navbar-collapse").addClass("active");
    });
    $(document).mouseup(function (e) {
        var div = $(".navbar-collapse");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass("active");
        }
    });

    /*STYLING A DROP-DOWN LIST*/
    $('.kind-of-sport').styler();
});
