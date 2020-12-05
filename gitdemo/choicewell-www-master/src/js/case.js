requirejs.config({
    baseUrl: '../../src/js',
    paths: {
        jquery: 'jquery-3.2.1.min'
    }
});

require(['jquery'], function ($) {
    $(function () {
        $('.case-tab').on('click', 'div', function() {
            $(this).parent().find('.active').removeClass('active')
            $(this).addClass('active')
            $('.case-tab-content').find('.active').removeClass('active')
            $('.case-tab-content').find('div[tab=' + $(this).attr('tab') + ']').addClass('active')
        })
    })
});
