
(function() {
$(document).ready(function(){

mixpanel.track("Arrive");

$("#double-border h2").hover(function() {
    $("#double-border").addClass("desature");
}, function() {
    $("#double-border").removeClass("desature");
});

$("#double-border h2").click(function() {
    $("#double-border").removeClass("desature");
    $("#double-border").addClass("blur");
    $("#double-border h2").addClass("inactive");
    
    $("#modal-" + $(this).parent().attr("id")).css("opacity", 1).css("z-index", 100);
});

$(".close-button").click(function() {
    $("#double-border").removeClass("blur");
    $(".modal").css("opacity", 0).css("z-index", 10);
    $("#double-border h2").removeClass("inactive");
});

});
})();
