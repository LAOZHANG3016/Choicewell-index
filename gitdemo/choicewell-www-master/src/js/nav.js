requirejs.config({
    baseUrl: '../../src/js',
    paths: {
        jquery: 'jquery-3.2.1.min'
    }
});

require(['jquery'], function ($) {
    $(function () {
        if (location.href.split('?view=')[1]) {
            const page = location.href.split('?view=')[1]
            if ($('.' + page).parent().hasClass('support-sub-nav') || $('.' + page).parent().hasClass('about-sub-nav')) {
                // $('.' + page).parent().parent().addClass('active')
                $('.nav-view>ul').addClass('ul-sub-view')
            }
            if ($('.' + page).parent().parent().parent().hasClass('plan-sub-nav')) {
                // $('.plan-sub-nav').find('.active').removeClass('active')
                // $('.' + page).parent().parent().addClass('active')
                // $('.plan-sub-nav').parent().addClass('active')
                $('.nav-view>ul').addClass('ul-sub-view')
            }
            $('.' + page).addClass('active')
        }
        $('.plan-sub-nav').on('click', 'li', function() {
            $(this).parent().find('.active').removeClass('active')
            $(this).addClass('active')
        })
        // $('.nav-view').hover(function() {
        //     $(this).removeClass('hover-nav-view')
        // }, function() {
        //     $(this).addClass('hover-nav-view')
        // })
        $('.sub-nav').parent().hover(function() {
            $('.nav-view').addClass('hover-nav-view')
        }, function() {
            $('.nav-view').removeClass('hover-nav-view')
        })
    })
});
