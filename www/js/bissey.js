
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

$(".to-contact").click(function() {
    $("#double-border").removeClass("desature");
    $("#double-border").addClass("blur");
    $("#double-border>h2").addClass("inactive");
    $(".modal").css("opacity", 0).css("z-index", 10);
    
    $("#modal-contact").css("opacity", 1).css("z-index", 100);
    
    var parent = $(this).parent();
    var select = $("#modal-contact select");
    var textarea = $("#modal-contact textarea");
    
    if (parent.hasClass("modal")) {
        var id = parent.attr("id");
        
        switch(id) {
            case "modal-conseil-image":
                select.val("image");
                textarea.attr("placeholder", "Parlez nous de votre profil, de votre style actuel, et de vos objectifs...");
                break;
            case "modal-personal-shopper":
                select.val("shopper");
                textarea.attr("placeholder", "Parlez nous un peu de vous! Vos envies, votre style et votre budget...");
                break;
            case "modal-conseil-cadeau":
                select.val("cadeau");
                textarea.attr("placeholder", "A qui s'adresse votre cadeau? Quels sont ses goûts, ses centres d'intérêt?");
                break;
        }
    } else {
        select.val("");
        textarea.attr("placeholder", "Votre message...");
    }
    
    modal = true;
});

$("#modal-contact select").change(function() {
    var textarea = $("#modal-contact textarea");
    switch($(this).val()) {
        case "image":
            textarea.attr("placeholder", "Parlez nous de votre profil, de votre style actuel, et de vos objectifs...");
            break;
        case "shopper":
            textarea.attr("placeholder", "Parlez nous un peu de vous! Vos envies, votre style et votre budget...");
            break;
        case "cadeau":
            textarea.attr("placeholder", "A qui s'adresse votre cadeau? Quels sont ses goûts, ses centres d'intérêt?");
            break;
    }
});

$(".close-button").click(function() {
    $("#double-border").removeClass("blur");
    $(".modal").css("opacity", 0).css("z-index", 10);
    $("#double-border h2").removeClass("inactive");
    
    modal = false;
});

});
})();
