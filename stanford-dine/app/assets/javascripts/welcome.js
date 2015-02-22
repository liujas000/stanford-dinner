
$(document).ready(function(){
	$('.plus-button').click(function(){
    var id = $(this).parent().attr("id");
    var button = $(this).parent;
    var change = 1;
  
    if($(this).hasClass('active')) {
       	$(this).removeClass('active');
      	change *= -1;
    }
    else {
    	$(this).addClass('active');
      	if($(this).parent().find('.minus-button').hasClass('active')) {
            $(this).parent().find('.minus-button').removeClass('active');
        	change *= 2;
      	}
    }
    $("#score"+id).text(parseInt($("#score"+id).text()) + change);
  
		$.ajax({
		  type: "POST",
      url:"/vote",
      data: {
        hall_id: id,
        vote: change
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
    var change = -1;
    
    if($(this).hasClass('active')) {
       	$(this).removeClass('active');
      	change *= -1;
    }
    else {
    	$(this).addClass('active');
      	if($(this).parent().find('.plus-button').hasClass('active')) {
       		$(this).parent().find('.plus-button').removeClass('active');
        	change *= 2;
      	}
    }
    $("#score"+id).text(parseInt($("#score"+id).text()) + change);
      
		$.ajax({
		  type: "POST",
      url:"/vote",
      data: {
        hall_id: id,
        vote: change
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




