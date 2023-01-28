$('.best_choice_card').hover(
    function() {
        let src = $(this).find(".img").attr("src").replace('.svg','')
        $(this).find(".img").attr("src", `${src}_white.svg`)
    }, function () {
        let src = $(this).find(".img").attr("src").replace('_white.svg', '')
        $(this).find(".img").attr("src", `${src}.svg`)
    }
)

/* Altera cor da NavBar */
const desiredElement = document.getElementById('navbar');
const pixelsAmount = '75';

window.addEventListener('scroll', function() {
    if (window.scrollY > pixelsAmount) {
    	desiredElement.classList.add('style_navbar_scrool'); 
    } else {
      desiredElement.classList.remove('style_navbar_scrool'); 
    }
});

