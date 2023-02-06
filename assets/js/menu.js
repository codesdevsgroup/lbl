$(function() {
  $('.toggle-nav').click(function (e) {
    e.stopPropagation()
    toggleNav()
  })

  $('body').click(function(e) {
    var target = $(e.target)
    if (!target.is('.menu-options') && !target.is('.menu-options ul') && $(".menu-options").hasClass("active_menu")) {
      toggleNav()
    }
  })

  function toggleNav() {
    if($(".menu-options").hasClass("active_menu")) {
      $(".menu-options").removeClass("active_menu")
    } else {
      $(".menu-options").addClass("active_menu")
    }
  }
})

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackTopButtonOnScroll()
}

function showNavOnScroll() {
  if (window.scrollY > 100) {
    $("#navigation").addClass("scroll")
  } else {
    $("#navigation").removeClass("scroll")
  }
}

function showBackTopButtonOnScroll() {
  if (window.scrollY > 600) {
    $('#backToTopButton').show(200)
  } else {
    $('#backToTopButton').hide(200)
  }
}
