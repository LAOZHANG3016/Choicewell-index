requirejs.config({
    baseUrl: '../../src/js',
    paths: {
        jquery: 'jquery-3.2.1.min'
    }
});

require(['jquery'], function ($) {
    $(function () {
        $('.partner-view-a').on('click', '.a-tab span', function() {
            $(this).parents('.a-tab').find('.active').removeClass('active')
            $(this).parent().addClass('active')
            $('.partner-view-a .a-content').find('.active').removeClass('active')
            $('.partner-view-a .a-content').find('div[tab=' + $(this).attr('tab') + ']').addClass('active')
        })
    })
});
