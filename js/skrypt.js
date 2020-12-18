$(document).ready(function () {

    $("img").click(function () {
        var imgPath = $(this).attr('src');
        var imgBigPath = $('.img-large').attr('src')
        $(this).attr('src', imgBigPath);
        $('.img-large').attr('src', imgPath);
             $(this).fadeOut(3000)
    });

})