$(function() {

    // var value0 = 0;
    // var value1 = 1;
    // var value2 = 2;
    // var value3 = 3;
    // var value4 = 4;
    // var value5 = 5;
    // var value6 = 6;
    // var value7 = 7;
    // var value8 = 8;
    // var value9 = 9;

    // var valueA = 10;
    // var valueB = 11;
    // var valueC = 12;
    // var valueD = 13;
    // var valueE = 14;
    // var valueF = 15;

    // fe=254(Red), fa=250(Green), fd=253(Blue)
    // Calculando el valor decimal ( FE )
    // 1 - Transformamos el primer numero en su equivalente en base 16 y lo multiplicaremos por 16.
    // F = 15;
    // 15 * 16 = 240;
    // 2 - El segundo dígito ( E ) representa las unidades.
    // E = 14
    // 3 - Sumamos las unidades (E) al valor obtenido:
    // 240 + 14 = 254;



    $.getJSON( "../css4-colors.json", function( data ) {
        var items = [];
        var redArrayDec = [];
        for (var i = 0; i < 148; i++) {
            $.each( data, function( key, val ) {
                items.push('<li id="' + val[i].id + '"' + 'class="background-color-' + val[i].id + '">' + val[i].attributes.color_name + ' <span>' + val[i].attributes.hex_rgb + ' | ' + val[i].attributes.decimal + '</span></li>');

                redArrayDec.push(val[i].attributes.decimal.substr(0, val[i].attributes.decimal.indexOf(',')));
            });
        }

        $( "<ul/>", {
            "id": "js-color-list",
            html: items.join( "" )
        }).appendTo( ".content" );

        console.log(redArrayDec);
    });

    // A-Z  Z-A
    $('.sort-name').click(function(e) {
        var $sort = this;
        var $list = $('#js-color-list');
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

    // Red Color
    // $('.sort-red').click(function(e) {
    //     redArrayDec.sort(function(a,b) {
    //         if (isNaN(a) || isNaN(b)) {
    //             return a > b ? 1 : -1;
    //         }
    //         return a - b;
    //     });
    //     e.preventDefault();
    //     console.log(redArrayDec);
    // });
});
