requirejs.config({
    baseUrl: '../../src/js',
    paths: {
        jquery: 'jquery-3.2.1.min'
    }
});

require(['jquery'], function ($) {
    $(function () {
        $('.culture-view-b').on('click', '.b-img>ul>li', function() {
            $(this).parent().find('.active').removeClass('active')
            $(this).addClass('active')
        })
    })
});
