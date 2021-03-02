
$.get("pages.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});