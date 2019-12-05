// Якорь с прогруткой
$('.main-arrow a').on('click', function (e) {
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500, 'linear');
    });

// Адаптивное меню
menu.onclick = function myFunction(){
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive"
	} else {
		x.className = "topnav";
	}
}