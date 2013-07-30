// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require private_pub
//= require_tree .

$(document).ready(function() {
  $(".note").draggable();

  $("#trash").droppable({
    drop: function(event, ui) {
      $(ui.draggable).fadeOut();
      $.ajax({
        url: "/notes/" + ui.draggable.data("nid"),
        type: "delete"
      })
    }
  });
});

// $(document).ready(function() {
//  $("li").on("click", function(e) {
//    $(e.target).css("color", "red");
//  });
// });

