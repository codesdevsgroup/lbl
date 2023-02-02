/* window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackTopButtonOnScroll()
}
 */
/* function showNavOnScroll() {
  if (window.scrollY > 100) {
    $("#navigation").addClass("scroll")
  } else {
    $("#navigation").removeClass("scroll")
  }
} */

/* function showBackTopButtonOnScroll() {
  if (window.scrollY > 600) {
    $('#backToTopButton').show(200)
  } else {
    $('#backToTopButton').hide(200)
  }
} */

const desiredElement = document.getElementById('navigation'); // elemento alvo
const pixelsAmount = '80'; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function() {
    if (window.scrollY > pixelsAmount) {
    	desiredElement.classList.add('scrol'); // adiciona classe "changeColor"
    } else {
      desiredElement.classList.remove('scrol'); // remove classe "changeColor"
    }
});