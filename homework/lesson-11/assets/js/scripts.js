jq2 = jQuery.noConflict();
jq2(function( $ ) {
    $('#show-jennifer').on('click', function () {
        $('#modal-jennifer').fadeIn(300);
    });


    $('#show-jennifer').on('click', function () {
        $('#modal-jennifer').fadeIn(300);
    });

    $('.modal-close').on('click', function () {
        $(this).parents('#modal-jennifer').fadeOut(300);
    });
});

jq2(function( $ ) {
    $('#show-charly').on('click', function () {
        $('#modal-charly').fadeIn(300);
    });


    $('#show-charly').on('click', function () {
        $('#modal-charly').fadeIn(300);
    });

    $('.modal-close').on('click', function () {
        $(this).parents('#modal-charly').fadeOut(300);
    });



});

