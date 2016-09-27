$(document).ready(function() {

  function populateLists(){
    $('#purchased').empty();
    $('#needed').empty();

    $.ajax({
    url: '/items',
    method: 'get',
    dataType: "json",
    success: function(response) {
      response.forEach(function(item) {
        if (item.purchased == true) {
          var entry = "<p> <input type='checkbox' name='purchased' id="+item.id+" checked='true'> "+item.title+"</p>"
          $('#purchased').append(entry);
        } 
        else if (item.purchased != true) {
          var entry = "<p> <input type='checkbox' name='purchased' id="+item.id+"> "+item.title+"</p>"
          $('#needed').append(entry);
        }
        })
      }
    });
  }
  
  populateLists();

  //changes item from needed to purchased in database by checking checkbox
  $(".list").on('change', ':checkbox', function () {
    if ($(this)[0].checked) {
      var purchased = true; 
    } else {
      var purchased = false;
    }
    var id = $(this)[0].id;
    $.ajax({
      url: '/items/'+id,
      method: "put",
      dataType: "json",
      data: {purchased: purchased},
      success: function(response){
        populateLists();
      }
    });
  });

});
