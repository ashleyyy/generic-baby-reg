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
        $("form").data('id', response.id);
      }
    });      
  });


  // saves new item
  $(".admin").on('click', '#admin-save', function(e) {
    e.preventDefault();

    if ($("input[name='purchased']")[0].checked) {
      var purchased = true;
    } else {
      var purchased = false;
    }

    if ($("form").data('id')) {
      var id = $("form").data('id');
      var method = "put";
      var putUrl = "/items/" + id
    } else {
      var method = "post";
      var putUrl = "/items"
    }

    var title = $(this).closest("div").find("input[name='title']").val();
    
    if ($(this).closest("div").find("input[name='comments']").val()) {
      var comments = $(this).closest("div").find("input[name='comments']").val();
    }
    
    if ($(this).closest("div").find("input[name='url']").val() != "") {
      var url = $(this).closest("div").find("input[name='url']").val();
    } 

    if (title != "") {
      $.ajax({
        url: putUrl,
        method: method,
        dataType: "json",
        data: {title: title, purchased: purchased, comments: comments, url: url},
        success: function(response){
          $("form")[0].reset(); 
          $("form").data('id', null)
          console.log(response);
        }
      });
    }
  });


  $(".admin").on('click', '#admin-delete', function(e) {
    e.preventDefault();

    var id = $("form").data('id');

      $.ajax({
        url: "/items/" + id + "/delete",
        method: 'delete',
        dataType: "json",
        success: function(response){
          $("form")[0].reset(); 
          $("form").data('id', null)
          console.log(response);
        }
      });



  });



  $(".admin").on('click', '#admin-clear', function(e) {
    e.preventDefault();

    $("form")[0].reset(); 
    $("form").data('id', null)

  });
});