$(document).ready(function() {


  // fill form on clicking list item
  $('li').on('click', function () {
    $("form")[0].reset();   

    var id = $(this).data('id') 

    $.ajax({
      url: '/items/'+id,
      method: "GET",
      dataType: "json",
      success: function(response){
        $("input[name='title']").val(response.title);
        $("input[name='comments']").val(response.comments);
        $("input[name='url']").val(response.url);
        if (response.purchased == true) {
          $("input[name='purchased']").prop('checked', true);
        }
      }
    });      
  });


});