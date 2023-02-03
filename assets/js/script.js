$('.best_choice_card').hover(
    function() {
        let src = $(this).find(".img").attr("src").replace('.svg','')
        $(this).find(".img").attr("src", `${src}_white.svg`)
    }, function () {
        let src = $(this).find(".img").attr("src").replace('_white.svg', '')
        $(this).find(".img").attr("src", `${src}.svg`)
    }
)

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      nav: true,
      dots:false,
      navText: [`
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" transform="rotate(-180 20 20)" fill="#00A54F"/>
      <path d="M8.93934 18.9393C8.35355 19.5251 8.35355 20.4749 8.93934 21.0607L18.4853 30.6066C19.0711 31.1924 20.0208 31.1924 20.6066 30.6066C21.1924 30.0208 21.1924 29.0711 20.6066 28.4853L12.1213 20L20.6066 11.5147C21.1924 10.9289 21.1924 9.97919 20.6066 9.3934C20.0208 8.80761 19.0711 8.80761 18.4853 9.3934L8.93934 18.9393ZM30 18.5L10 18.5V21.5L30 21.5V18.5Z" fill="white"/>
      </svg>
      `, `
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#00A54F"/>
      <path d="M31.0607 19.9493C31.6464 19.3635 31.6464 18.4138 31.0607 17.828L21.5147 8.28207C20.9289 7.69628 19.9792 7.69628 19.3934 8.28207C18.8076 8.86786 18.8076 9.8176 19.3934 10.4034L27.8787 18.8887L19.3934 27.374C18.8076 27.9597 18.8076 28.9095 19.3934 29.4953C19.9792 30.0811 20.9289 30.0811 21.5147 29.4953L31.0607 19.9493ZM10 20.3887H30V17.3887H10V20.3887Z" fill="white"/>
      </svg>
      `],
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1
        },
        567: {
          items: 1
        },
        1024: {
          items: 0
        },
        1280: {
          items: 0
        }
      },
      autoplayHoverPause: true
    });
})