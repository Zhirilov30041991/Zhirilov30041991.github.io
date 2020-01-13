// Якорь с прогруткой
$('.main-arrow a').on('click', function (e) {
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500, 'linear');
    });