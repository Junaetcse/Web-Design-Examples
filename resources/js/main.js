$(document).ready(function() {

    $('.js--service-section').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass("sticky")
        } else {
            $('nav').removeClass("sticky")
        }
    });


    var mixer = mixitup('.container');

});