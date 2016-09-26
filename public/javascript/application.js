$(document).ready(function() {

  

  //changes item from needed to purchased in database by checking checkbox
  $(':checkbox').change(function() {
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
          console.log(response)
        }
      });
  });

});
