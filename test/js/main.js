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

    // fe = 254(Red), fa = 250(Green), fd = 253(Blue)
    // Calculando el valor decimal ( fe )
    // 1 - Transformamos el primer numero en su equivalente en base 16 multiplicandolo por 16.
    // f = 15;
    // 15 * 16 = 240;
    // 2 - El segundo dígito ( e ) representa las unidades.
    // e = 14
    // 3 - Sumamos las unidades ( e ) al valor obtenido:
    // 240 + 14 = 254;

    var responseData = [];

    // Get the json data and add rgb values to json
    $.getJSON( "../css4-colors.json", function( response ) {
        responseData = response.data;
        for (let i = 0; i < responseData.length; i++) {
            var rgb = responseData[i].attributes.decimal.split(',');
            responseData[i].attributes.r  = parseInt(rgb[0]);
            responseData[i].attributes.g  = parseInt(rgb[1]);
            responseData[i].attributes.b  = parseInt(rgb[2]);
        }

        drawColors();
    });

    // Sort A-Z
    function sortAZ() {
        function compare(a,b) {
            if (a.id < b.id) return -1;
            if (a.id > b.id) return 1;
            return 0;
        }

        responseData.sort(compare);
        drawColors();
    }

    // Sort Z-A
    function sortZA() {
        function compare(a,b) {
            if (a.id > b.id) return -1;
            if (a.id < b.id) return 1;
            return 0;
        }

        responseData.sort(compare);
        drawColors();
    }

    // Sort color with more amount of red
    function sortColorRed() {
        function compare(a,b) {
            if (a.attributes.r > b.attributes.r) return -1;
            if (a.attributes.r < b.attributes.r) return 1;
            return 0;
        }

        responseData.sort(compare);
        drawColors();
    }

    // Sort color with more amount of green
    function sortColorGreen() {
        function compare(a,b) {
            if (a.attributes.g > b.attributes.g) return -1;
            if (a.attributes.g < b.attributes.g) return 1;
            return 0;
        }

        responseData.sort(compare);
        drawColors();
    }

    // Sort color with more amount of blue
    function sortColorBlue() {
        function compare(a,b) {
            if (a.attributes.b > b.attributes.b) return -1;
            if (a.attributes.b < b.attributes.b) return 1;
            return 0;
        }

        responseData.sort(compare);
        drawColors();
    }

    // Add the color list
    function drawColors() {
        var items = [];

        $.each( responseData, function( key, item ) {
            items.push('<li id="' + item.id + '"' + 'class="background-color-' + item.id + '">' + item.attributes.color_name + ' <span>' + item.attributes.hex_rgb + ' | ' + item.attributes.decimal + '</span></li>');
        });

        $('.content').html('');

        $( "<ul/>", {
            "id": "js-color-list",
            html: items.join( "" )
        }).appendTo( ".content" );
    }


    // Click events
    $('.sort-name').click(function(e) {
        e.preventDefault();
        //console.log($(this).hasClass('asc'));
        $('.options a').removeClass('is-active');
        $(this).addClass('is-active');

        if($(this).hasClass('asc')){
            sortAZ();
        } else {
            sortZA();
        }
    });

    $('.sort-red').click(function(e) {
        e.preventDefault();
        $('.options a').removeClass('is-active');
        $(this).addClass('is-active');

        sortColorRed();
    });

    $('.sort-green').click(function(e) {
        e.preventDefault();
        $('.options a').removeClass('is-active');
        $(this).addClass('is-active');

        sortColorGreen();
    });

    $('.sort-blue').click(function(e) {
        e.preventDefault();
        $('.options a').removeClass('is-active');
        $(this).addClass('is-active');

        sortColorBlue();
    });
});
