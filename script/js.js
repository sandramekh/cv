/* global $*/
$(function (){
    //jQuery for page scrolling - requires jQuery Easing plugin
    $('a.page-scroll').bind ('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop ().animate ({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easyInOutExpo');
        event.preventDefault();
    });
})