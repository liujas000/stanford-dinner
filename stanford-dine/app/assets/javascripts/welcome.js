
$(document).ready(function(){
	$('.plus-button').click(function(){
    var id = $(this).parent().attr("id");
		alert("plus button pressed " + id);
		$.ajax({
		  type: "POST",
      url:"/vote",
      data: {
        hall_id: id,
        vote: 1
      },
      success: function() {
        alert("ajax success");
      },
      error: function(data) {
          console.log(data);
          alert("ajax failure");
      }
		})
    
	});
});

$(document).ready(function(){
	$('.minus-button').click(function(){
    var id = $(this).parent().attr("id");
		alert("minus button pressed" + id);
		$.ajax({
		  type: "POST",
      url:"/vote",
      data: {
        hall_id: id,
        vote: -1
      },
      success: function() {
        alert("ajax success");
      },
      error: function(data) {
          console.log(data);
          alert("ajax failure");
      }
		})
	});
});
alert("javascript started");
