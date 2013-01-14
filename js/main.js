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
        $('.about').hide(0);
        setTimeout(function() {
            $('.' + that.attr('id')).hide(0).addClass('hidden');
        }, 50);
    });

    $('area').click(function() {
        if ( $(this).attr('id') === 'danny' ) {
            console.log('fuck');
            $('img[alt=Jerks]').hide(0);
            $('.overlay').fadeOut(200);
            $('.clicked').fadeIn(200);
        }
    });

    // $('area').click(function() {
    //     var that = $(this);
    //     console.log(that);
    //     $('.' + that.attr('id')+ 'Blurb').show(0).removeClass('hidden');
    // });

    // $('.about .close').click(function() {
    //     $('.about').hide(0).addClass('hidden');
    // });

});
