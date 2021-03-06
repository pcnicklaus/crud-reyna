// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

$('form').on('submit', function (event) {
  event.preventDefault();
  var payload = {
    name: $('#name').val(),
    age: $('#age').val(),
    spitter: spitter
  };
  if($('#spitter').is(':checked')) {
    payload.spitter = true;
  } else {
    payload.spitter = false;
  }
  $.post('/api/llamas', payload, function (data) {
    $('.message-section').show();
    $('#message').html("Llama has been added");
    getLlamas();
  });
});

function getLlamas() {
  $('#all-llamas').html('');
  $.get('/api/llamas', function (data) {
    for (var i = 0; i < data.length; i++) {
      $('#all-llamas').append(
        '<tr><td>' + data[i].name + '</td><td>' + data[i].age + '</td><td>' + data[i].spitter + '</td></tr>' + '<td><a class="btn danger" id=""' + data[i]._id + '>Delete</a>'
      );
      $('form input').val('');
      $('#spitter').removeAttr('checked');
    }
  });
}
