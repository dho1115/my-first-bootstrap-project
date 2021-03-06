$(function() {
    $(".carousel").carousel({interval: 1500});
    $("#carouselButton").click(function() {
        //Code for toggling.
        if($('#carouselButton').children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    })
});

$(document).ready(function() {
    $('#reserveButton').on("click", function() {
        $('#reserveModal').modal("show");
    });
    
    $('#loginButton').on("click", function() {
        $("#loginModal").modal("show");
    })
});
