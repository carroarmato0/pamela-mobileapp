
var PAMELA_DATA_URL = 'https://pamela.inuits.eu/macs.php';

// AJAX CALL to the DATA URL
$.ajax({
    url: PAMELA_DATA_URL,
    context: document.body,
    datatype: 'script',
}).done(function(data) {

    var jsonArray = JSON.parse("[" + data + "]");
    var unsorted_array = $.map(jsonArray, function(el) {
        return el
    });
    var array = unsorted_array.sort();

    $('ul#presence_list').empty();

    $.each(array, function(index, value) {
        var type = "laptop";
        var str = array[index];
	var loc = str.slice(str.indexOf('@'));
        if (str.indexOf('_') > 0) {
            var shortstr = str.substr(0, str.indexOf('_'));
            type = str.slice(str.indexOf('_') + 1, str.indexOf('@'));
        } else {
            var shortstr = str.substr(0, str.indexOf('@'));
        }



        if (str.toLowerCase().indexOf("brasschaat") >= 0) {
            if ($("#" + shortstr).length == 0) {
                $('ul#presence_list_brasschaat').append("<li id='" + shortstr + "'>" + shortstr + "<img id='" + shortstr + "phone' class='icon phone' src='./imgs/phone.png' title='GSM'><img id='" + shortstr + "laptop' class='icon laptop' src='./imgs/laptop.png' title='Laptop'></img></li>");


            }
            if (type == "laptop") {
                $("#" + shortstr + "laptop").css("visibility", "visible");
            } else if (type == "phone") {
                $("#" + shortstr + "phone").css("visibility", "visible");
            }
        } else if (str.toLowerCase().indexOf("gent") >= 0) {
            if ($("#" + shortstr).length == 0) {
                $('ul#presence_list_gent').append("<li id='" + shortstr + "'>" + shortstr + "<img id='" + shortstr + "phone' class='icon phone' src='./imgs/phone.png' title='GSM'><img id='" + shortstr + "laptop' class='icon laptop' src='./imgs/laptop.png' title='Laptop'></img></li>");


            }
            if (type == "laptop") {
                $("#" + shortstr + "laptop").css("visibility", "visible");
            } else if (type == "phone") {
                $("#" + shortstr + "phone").css("visibility", "visible");
            }
        } else if (str.toLowerCase().indexOf("prague") >= 0) {
            if ($("#" + shortstr).length == 0) {
                $('ul#presence_list_prague').append("<li id='" + shortstr + "'>" + shortstr + "<img id='" + shortstr + "phone' class='icon phone' src='./imgs/phone.png' title='GSM'><img id='" + shortstr + "laptop' class='icon laptop' src='./imgs/laptop.png' title='Laptop'></img></li>");

            }
            if (type == "laptop") {
                $("#" + shortstr + "laptop").css("visibility", "visible");
            } else if (type == "phone") {
                $("#" + shortstr + "phone").css("visibility", "visible");
            }

        } else if (str.toLowerCase().indexOf("kyiv") >= 0) {
            if ($("#" + shortstr).length == 0) {
                $('ul#presence_list_kyiv').append("<li id='" + shortstr + "'>" + shortstr + "<img id='" + shortstr + "phone' class='icon phone' src='./imgs/phone.png' title='GSM'><img id='" + shortstr + "laptop' class='icon laptop' src='./imgs/laptop.png' title='Laptop'></img></li>");

            }
            if (type == "laptop") {
                $("#" + shortstr + "laptop").css("visibility", "visible");
            } else if (type == "phone") {
                $("#" + shortstr + "phone").css("visibility", "visible");
            }
        } else if (str.toLowerCase().indexOf("rotterdam") >= 0) {
            if ($("#" + shortstr).length == 0) {
                $('ul#presence_list_rotterdam').append("<li id='" + shortstr + "'>" + shortstr + "<img id='" + shortstr + "phone' class='icon phone' src='./imgs/phone.png' title='GSM'><img id='" + shortstr + "laptop' class='icon laptop' src='./imgs/laptop.png' title='Laptop'></img></li>");

            }
            if (type == "laptop") {
                $("#" + shortstr + "laptop").css("visibility", "visible");
            } else if (type == "phone") {
                $("#" + shortstr + "phone").css("visibility", "visible");
            }

        } else if (str.toLowerCase().indexOf("brno") >= 0) {
            if ($("#" + shortstr).length == 0) {
                $('ul#presence_list_brno').append("<li id='" + shortstr + "'>" + shortstr + "<img id='" + shortstr + "phone' class='icon phone' src='./imgs/phone.png' title='GSM'><img id='" + shortstr + "laptop' class='icon laptop' src='./imgs/laptop.png' title='Laptop'></img></li>");

            }
            if (type == "laptop") {
                $("#" + shortstr + "laptop").css("visibility", "visible");
            } else if (type == "phone") {
                $("#" + shortstr + "phone").css("visibility", "visible");
            }


        } else {
            if ($("#" + shortstr).length == 0) {
                $('ul#presence_list_other').append("<li id='" + shortstr + "'>" + shortstr + loc + "<img id='" + shortstr + "phone' class='icon phone' src='./imgs/phone.png' title='GSM'><img id='" + shortstr + "laptop' class='icon laptop' src='./imgs/laptop.png' title='Laptop'></img></li>");

            }
            if (type == "laptop") {
                $("#" + shortstr + "laptop").css("visibility", "visible");
            } else if (type == "phone") {
                $("#" + shortstr + "phone").css("visibility", "visible");
            }


        }


    });

    $('#filter').fastLiveFilter('#presence_list_brasschaat');
    $('#filter').fastLiveFilter('#presence_list_prague');
    $('#filter').fastLiveFilter('#presence_list_gent');
    $('#filter').fastLiveFilter('#presence_list_rotterdam');
    $('#filter').fastLiveFilter('#presence_list_brno');
    $('#filter').fastLiveFilter('#presence_list_kyiv');
    $('#filter').fastLiveFilter('#presence_list_other');

    $('.townheader:has(li)').show();

});
