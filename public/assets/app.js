$(window).on("scroll", function() {
    if($(window).scrollTop() <= 0) {
        $(".navbar").css("background-color", "rgba(36, 38, 45, 0)");
    } else if ($(window).scrollTop() > 0){
       $(".navbar").css("background-color", "rgba(80, 0, 0, 0.8)");

    }
});