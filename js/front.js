$(function () {

    $("input").focus(function () {
        $(this).attr("dataval", $(this).attr("placeholder"));
        $(this).attr("placeholder", "");
    });

    $("input").blur(function () {
        $(this).attr("placeholder", $(this).attr("dataval"));
    });


});