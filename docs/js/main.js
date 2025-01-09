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
    //var c = [];
    var rgbArr = [];
    // Get the json data and add rgb values to json
    $.getJSON( "../css4-colors.json", function( response ) {
        responseData = response.data;
        //rgbArr = response.data;
        for (let i = 0; i < responseData.length; i++) {
            var rgb = responseData[i].attributes.decimal.split(',');
            //var listrgb = rgbArr[i].attributes.decimal;
            responseData[i].attributes.r = parseInt(rgb[0]);
            responseData[i].attributes.g = parseInt(rgb[1]);
            responseData[i].attributes.b = parseInt(rgb[2]);

           // var r = responseData[i].attributes.r;
            var r = parseInt(rgb[0]);
            var g = responseData[i].attributes.g;
            var b = responseData[i].attributes.b;


            //c["c" + i] = [r, g, b];
            //c[i] = [r, g, b];

            //c = ["c" + i];
            //console.log(c);

            // Array of values rgb grouping by 1 string
            //rgbArr[i] = rgb.join();
            //rgbArr[i] = [r, g, b].join();

            // Array of values rgb grouping by 3 strings
            //rgbArr[i] = rgb;

            // Arrays of values rgb by number
            rgbArr[i] = [r, g, b];

            // Array for r values by number
            //rgbArr[i] = r;
        }
        drawColors();
    });
    console.log(rgbArr);
    //console.log(c);


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

    // Sort color by rgb order amount
    function sortRGB() {
        function compare(a,b) {
            //if (a.attributes.r > b.attributes.r && a.attributes.g > b.attributes.g && a.attributes.b > b.attributes.b) return -1;
            //if (a.attributes.r < b.attributes.r && a.attributes.g < b.attributes.g && a.attributes.b < b.attributes.b) return 1;
            if (a.attributes.decimal > b.attributes.decimal) return -1;
            if (a.attributes.decimal < b.attributes.decimal) return 1;
            return 0;
        }
        responseData.sort(compare);
        drawColors();
    }

    // Add the color list to .content
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




     //var rgbArr = [c1, c2, c3, ...]
    // Each color is an array of three numbers between 0 and 255
    // ci = [red, green, blue]

    // function rgbToHsl(c) {
    //     var r = c[0]/255, g = c[1]/255, b = c[2]/255;
    //     var max = Math.max(r, g, b), min = Math.min(r, g, b);
    //     var h, s, l = (max + min) / 2;

    //     if (max == min) {
    //         h = s = 0; // achromatic
    //     } else {
    //         var d = max - min;
    //         s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    //         switch(max){
    //             case r: h = (g - b) / d + (g < b ? 6 : 0); break;
    //             case g: h = (b - r) / d + 2; break;
    //             case b: h = (r - g) / d + 4; break;
    //         }
    //         h /= 6;
    //     }

    //     return new Array(h * 360, s * 100, l * 100);
    // }

    // var sortRgbArr = rgbArr.map(function(c, i) {
    //     // Convert to HSL and keep track of original indices

    //     return {color: rgbToHsl(c), index: i};
    //     }).sort(function(c1, c2) {
    //     // Sort by hue
    //     return c1.color[0] - c2.color[0];
    //     }).map(function(data) {
    //     // Retrieve original RGB color
    //     return rgbArr[data.index];
    // });

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

    $('.sort-rgb').click(function(e) {
        e.preventDefault();
        $('.options a').removeClass('is-active');
        $(this).addClass('is-active');

        sortRGB();
        //rgbToHsl();
    });
});
