$(document).ready(function() {

    $.getJSON( "../css4-colors.json", function( data ) {

        var items = [];
        var i = 0;
        for (; i < 148; i++) {
            $.each(data, function (key, val) {
                items.push('<li id="' + val[i].id + '"class="background-color-' + val[i].id + '">' + val[i].attributes.color_name + ' <span>' + val[i].attributes.hex_rgb + '</span></li>');
            });
        }
        $( "<ul/>", {
            html: items.join( "" )
        }).appendTo( ".content" );
    });

});
