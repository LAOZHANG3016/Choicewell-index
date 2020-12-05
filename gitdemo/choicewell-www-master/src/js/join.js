requirejs.config({
    baseUrl: '../../src/js',
    paths: {
        jquery: 'jquery-3.2.1.min',
        swiper: 'swiper.min'
    }
});

require(['jquery', 'swiper'], function ($, Swiper) {
    $(function () {
        // swiper
        var mySwiper = new Swiper('.join-view-c .swiper-container', {
            autoplay: 3000, //可选选项，自动滑动
            loop: true
        })
    })
});
