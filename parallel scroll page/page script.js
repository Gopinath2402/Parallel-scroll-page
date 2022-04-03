$('document').ready(function () {
    console.log('app started');
    $(window).scroll(function () {
        if($(window).scrollTop()){
            $('#gasfilling').addClass('scrollup');
        $('#filament').addClass('scrollup');
        $('#leadwire2').addClass('scrollup');
        $('#leadwire1').addClass('scrollup');
        $('#shadow').addClass('scrollup')
        $('#text').addClass('scrollup');
         $('.wirewithbulb').addClass('scrollup');
         $('.title').addClass('scrollup');
        }else{
            $('#gasfilling').removeClass('scrollup');
        $('#filament').removeClass('scrollup');
        $('#leadwire2').removeClass('scrollup');
        $('#leadwire1').removeClass('scrollup');
        $('#shadow').removeClass('scrollup')
        $('#text').removeClass('scrollup');
         $('.wirewithbulb').removeClass('scrollup');
         $('.title').removeClass('scrollup');
        }
    })   
})

$('.aboutlink').click(function(){
    $('html').animate({scrollTop:$('#parallel').offset().top},1200);
})

