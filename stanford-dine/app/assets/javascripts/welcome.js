$(document).ready(function(){
	$('.plus-button').click(function(){
    var id = $(this).parent().attr("id");	
		$.ajax({
		  type: "POST",
      url:"/vote",
      data: {
        hall_id: id,
        vote: 1
      },
      success: function() {
        
      },
      error: function(data) {
          console.log(data);
          console.log("ajax failure");
      }
		})
    
	});
});

$(document).ready(function(){
	$('.minus-button').click(function(){
    var id = $(this).parent().attr("id");
		$.ajax({
		  type: "POST",
      url:"/vote",
      data: {
        hall_id: id,
        vote: -1
      },
      success: function() {
        
      },
      error: function(data) {
          console.log(data);
          console.log("ajax failure");
      }
		})
	});
});
alert("javascript started");

