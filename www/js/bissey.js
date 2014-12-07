
(function() {
$(document).ready(function(){

mixpanel.track("Arrive");

var modal = false;

$("#double-border>h2").hover(function() {
    $("#double-border").addClass("desature");
    $("#double-border>h2").not($(this)).addClass("inactive");
}, function() {
    $("#double-border").removeClass("desature");
    $("#double-border>h2").addClass("instant");
    
    if (!modal) {
        $("#double-border>h2").removeClass("inactive");
    }
});

$("#double-border h2").click(function() {
    $("#double-border").removeClass("desature");
    $("#double-border").addClass("blur");
    $("#double-border>h2").addClass("inactive");
    
    $("#modal-" + $(this).attr("id")).css("opacity", 1).css("z-index", 100);
    modal = true;
});

$(".close-button").click(function() {
    $("#double-border").removeClass("blur");
    $(".modal").css("opacity", 0).css("z-index", 10);
    $("#double-border h2").removeClass("inactive");
    
    modal = false;
});

});
})();
