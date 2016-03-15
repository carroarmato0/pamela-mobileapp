var PAMELA_DATA_URL = 'https://pamela.inuits.eu/macs.php'

// AJAX CALL to the DATA URL
$.ajax({
  url: PAMELA_DATA_URL,
  context: document.body,
  datatype: 'script',
}).done(function(data) {

  var jsonArray = JSON.parse("[" + data + "]");
  var unsorted_array = $.map(jsonArray, function(el) { return el });
  var array = unsorted_array.sort();

  $('ul#presence_list').empty();

  $.each(array, function(index, value) {
	
	var str = array[index];

	if (str.toLowerCase().indexOf("brasschaat") >= 0){
    		$('ul#presence_list_brasschaat').append("<li>" + value.substr(0, value.indexOf('@')) + "</li>");
	}
	else if (str.toLowerCase().indexOf("gent") >= 0){
		$('ul#presence_list_gent').append("<li>" + value.substr(0, value.indexOf('@')) + "</li>");
	}  
	else if (str.toLowerCase().indexOf("prague") >= 0){
    		$('ul#presence_list_prague').append("<li>" + value.substr(0, value.indexOf('@')) + "</li>");
	}  
	else if (str.toLowerCase().indexOf("kyiv") >= 0){
    		$('ul#presence_list_kyiv').append("<li>" + value.substr(0, value.indexOf('@')) + "</li>");
	}  
	else if (str.toLowerCase().indexOf("rotterdam") >= 0){
    		$('ul#presence_list_rotterdam').append("<li>" + value.substr(0, value.indexOf('@')) + "</li>");
	}  
	else if (str.toLowerCase().indexOf("brno") >= 0){
    		$('ul#presence_list_brno').append("<li>" + value.substr(0, value.indexOf('@')) + "</li>");
	}  
	else {
    		$('ul#presence_list_other').append("<li>" + value + "</li>");
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
