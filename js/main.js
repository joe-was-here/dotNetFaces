$(document).ready(function () {

    $('.team img').rwdImageMaps();

    $('area').hover(function(){
        var that = $(this);
        setTimeout(function() {
            $('.' + that.attr('id')).stop().show(0).removeClass('hidden');
        }, 50);
    },
    function () {
        var that = $(this);
        setTimeout(function() {
            $('.' + that.attr('id')).hide(0).addClass('hidden');
        }, 50);
    });

});
