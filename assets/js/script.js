$('.best_choice_card').hover(
    function() {
        let src = $(this).find(".img").attr("src").replace('.svg','')
        $(this).find(".img").attr("src", `${src}_white.svg`)
    }, function () {
        let src = $(this).find(".img").attr("src").replace('_white.svg', '')
        $(this).find(".img").attr("src", `${src}.svg`)
    })
