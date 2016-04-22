$(document).ready(function(){
  function getNextDog() {
    $.ajax({
      url: '/dogs',
      dataType: 'json',
      success: function(data) {
        console.log(data);
        //UPDATE DOM
      }
    })
  };
// $('#new-nerd').click(function(e){
//    e.preventDefault();
//    var name = $('#nerd-name').val();
//    var interests = $('#nerd-interests').val();
//     $('#nerd-name').val("");
//     $('#nerd-interests').val("");

//     $.ajax({
//       url: '/nerds',
//       method: 'POST',
//       dataType: 'json',
//       data: {name: name, interests: interests}
//     })
//       .done(function(data, textStatus, jqXHR){
//         alert(data.status)
//         $( "#nerds-list" ).prepend( "<li><strong>" + name + "</strong>: " + interests + "</li>" );
//       })
//       .fail(function(data, textStatus, jqXHR){
//         console.log("ERROR saving nerd: " + textStatus);
//       });
//   });
});

