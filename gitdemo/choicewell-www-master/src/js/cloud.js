requirejs.config({
    baseUrl: '../../src/js',
    paths: {
        jquery: 'jquery-3.2.1.min'
    }
});

require(['jquery'], function ($) {
    $(function () {
        $('.cloud-view-b').on('click', '.b-content>ul>li', function() {
            $(this).parent().find('.active').removeClass('active')
            $(this).addClass('active')
            $(this).parents('.b-content').find('.b-content-img').find('.active').removeClass('active')
            $(this).parents('.b-content').find('.b-content-img').find('img:eq(' + $(this).index() + ')').addClass('active')
        })
    })
});
