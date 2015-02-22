
$(document).ready(function() {
  $("[id^='score']").each(function(index) {
  var n = parseInt($(this).getText());
    if(n > 0) {
      $(this).css('color', 'green');
    }
    else if(n < 0) {
      $(this).css('color', 'red');
    }
    else {
      $(this).css('color', 'black');
    }
  });
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
    var newScore = parseInt($("#score"+id).text()) + change;
    $("#score"+id).text(newScore);
    if(k > 0) {
      $(newScore).css('color', 'green');
    }
    else if(k < 0) {
      $(newScore).css('color', 'red');
    }
    else {
      $(newScore).css('color', 'black');
    }
  
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
    var newScore = parseInt($("#score"+id).text()) + change;
    $("#score"+id).text(newScore);
    if(k > 0) {
      $(newScore).css('color', 'green');
    }
    else if(k < 0) {
      $(newScore).css('color', 'red');
    }
    else {
      $(newScore).css('color', 'black');
    }
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





