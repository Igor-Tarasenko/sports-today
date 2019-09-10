




$(document).ready(function() {
    var preloader = $('.preloader'),
        loader = preloader.find('.cssload-loader');
    loader.fadeOut();
    preloader.delay(350).fadeOut('slow');

    /*News news api*/
    var params = {
        "query": "{\"$query\":{\"$and\":[{\"conceptUri\":\"http://en.wikipedia.org/wiki/Sport\"},{\"categoryUri\":\"dmoz/Sports\"},{\"lang\":\"eng\"}]}}",
        "dataType": [
            "news"
        ],
        "resultType": "articles",
        "articlesSortBy": "date",
        "articlesCount": 20,
        "articleBodyLen": -1,
        "includeConceptImage": true,
        "includeConceptDescription": true,
        "includeSourceRanking": true,
        "apiKey": "43bc7e72-0cc7-4d12-a388-f01a9cba9833"
    };
    $.ajax({
        url: "http://eventregistry.org/api/v1/article/getArticles",
        crossDomain: true,
        data: params,
        method: 'GET',
        async: false,
    })
        .done(function(result) {
            console.log(result);
    })
        .fail(function(err) {
            console.error(err.statusText);
    });
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
