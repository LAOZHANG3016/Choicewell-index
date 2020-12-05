requirejs.config({
    baseUrl: './src/js',
    paths: {
        jquery: 'jquery-3.2.1.min',
        swiper: 'swiper.min'
    }
});

require(['jquery', 'swiper'], function ($, Swiper) {
    $(function () {
        // swiper
        var mySwiper = new Swiper('.banner-view.swiper-container', {
            autoplay: 3000, //可选选项，自动滑动
            loop: true,
            autoHeight: true,
        })

        $('.logo-li').on('click', 'li', function() {
            $(this).parent().find('.active').removeClass('active')
            $(this).addClass('active')

            $('.logo-content').find('.content-active').removeClass('content-active')
            $('.logo-content').find('li:eq(' + $(this).index() + ')').addClass('content-active')
        })
    })
});
