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
    $('ul#presence_list').append("<li>" + value + "</li>");
  });

  $('#filter').fastLiveFilter('#presence_list');
});
