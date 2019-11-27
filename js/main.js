menu.onclick = function myFunction(){
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive"
	} else {
		x.className = "topnav";
	}
}
// Карусель
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:4,
    navText : ["<img src=\"img/prev-end.png\">","<img src=\"img/prev-next.png\">"],
    nav:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})