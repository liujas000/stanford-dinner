
// $(function(){
//     $('#plus-button').on('click', function(e){
//         alert("BUTTON WAS PRESSED"å);
//         console.log("button pressed");
//         $.ajax({
//           type:'POST',
//           url:'/vote/'+ $(this).attr('id') + '/1';
//         })
//     });
// });
$(document).ready(function(){
	$('.plus-button').click(function(){
    var abc = $(this).parent().attr("id");
		alert("plus button pressed " + abc);
		$.ajax({
		  type: "POST",
      url:"/vote",
      data: {
        hall_id: abc,
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
    var abc = $(this).parent().attr("id");
		alert("minus button pressed" + abc);
	});
});
alert("javascript started");
