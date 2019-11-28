menu.onclick = function myFunction(){
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive"
	} else {
		x.className = "topnav";
	}
}
var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });