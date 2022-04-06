//Jquery used to import the head, top and bottom navbar to all the 
//HTML Pages rather than repeating the same content on all the pages
// This will make it easy rather than changing the same content in all the HTML Files.


$.get("headsection.html", function(data){
    $("#headsection").replaceWith(data);
});

$.get("topnavbar.html", function(data){
    $(".topnavbar").replaceWith(data);
});

$.get("bottomnavbar.html", function(data){
    $(".bottomnavbar").replaceWith(data);
});