$(document).ready(function() {
    $('.team img').rwdImageMaps();

    $('area').hover(function(){
        var that = $(this),
             areas = $('area');
        console.log(that.attr('title'));
    },
    function(){

    });

});
