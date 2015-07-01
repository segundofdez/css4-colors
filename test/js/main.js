$(document).ready(function() {

    // JSON to list
    $.getJSON( "../css4-colors.json", function( data ) {

        var items = [];

        for (var i = 0; i < 148; i++) {
            $.each(data, function (key, val) {
                items.push('<li id="' + val[i].id + '"class="background-color-' + val[i].id + '">' + val[i].attributes.color_name + ' <span>' + val[i].attributes.hex_rgb + ' | ' + val[i].attributes.decimal + '</span></li>');
            });
        }
        $( "<ul/>", {
            "id": "sort-list",
            html: items.join( "" )
        }).appendTo( ".content" );
    });

    // A-Z  Z-A
    $('.link-sort-list').click(function(e) {
        var $sort = this;
        var $list = $('#sort-list');
        var $listLi = $('li',$list);
        $listLi.sort(function(a, b){
            var keyA = $(a).text();
            var keyB = $(b).text();
            if($($sort).hasClass('asc')){
                return (keyA > keyB) ? 1 : 0;
            } else {
                return (keyA < keyB) ? 1 : 0;
            }
        });
        $.each($listLi, function(index, row){
            $list.append(row);
        });
        e.preventDefault();
    });

});
