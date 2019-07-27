$(document).ready(function(){
    $('.next').click(function(){
        var currentfoto = $('.foto.current');
        var currentfotoindex = $('.foto.current').index();
        var nextfotoindex = currentfotoindex + 1;
        var nextfoto = $('.foto').eq(nextfotoindex);
        currentfoto.fadeOut(1);
        currentfoto.removeClass('current');

        if(nextfotoindex == ($('.foto:last').index()+1)){
            $('.foto').eq(0).fadeIn(1);
            $('.foto').eq(0).addClass('current');
        }else{
            nextfoto.fadeIn(1);
            nextfoto.addClass('current');
        }
    });

    $('.prev').click(function(){
        var currentfoto = $('.foto.current');
        var currentfotoindex = $('.foto.current').index();
        var prevfotoindex = currentfotoindex - 1;
        var prevfoto = $('.foto').eq(prevfotoindex);
        currentfoto.fadeOut(1);
        currentfoto.removeClass('current');
        prevfoto.fadeIn(1);
        prevfoto.addClass('current');
    });
});
