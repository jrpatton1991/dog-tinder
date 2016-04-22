$(document).ready(function(){
  var dogId;

  function getNextDog() {
    $.ajax({
      url: '/dogs',
      method: 'GET',
      dataType: 'json',
      success: function(dogData) {
        if (dogData.status) {
          $('.dog').html('');
          alert(dogData.status);
        } else {
          dogId = dogData._id;

          $('.dog').html(
            '<img src="' + dogData.photo + '"/>' +
            '<div class="dog-name">' + dogData.name + ' (' + dogData.age + ')</div>'
          );
        }
      }
    });
  };

  getNextDog();

  $('.hot-button').click(function(event){
    var liked = $(event.currentTarget).hasClass('hot-button');


$.ajax({
      url: '/dogs/' + dogId,
      method: 'PUT',
      dataType: 'json',
      data: {liked: liked},
      success: function(dogData) {
        getNextDog();
        $('#liked-dogs').append('<li>' + dogData.name + '</li>' );
      }
    });
  });

  $('.not-hot-button').click(function(event){
    var notliked = $(event.currentTarget).hasClass('not-hot-button');


$.ajax({
      url: '/dogs/' + dogId,
      method: 'PUT',
      dataType: 'json',
      data: {liked: notliked},
      success: function(dogData) {
        getNextDog();
      }
    });
  });
});


