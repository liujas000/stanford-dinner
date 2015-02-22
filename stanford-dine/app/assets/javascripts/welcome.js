
$(function(){
    $('#plus-button').on('click', function(e){
        alert("BUTTON WAS PRESSED");
        console.log("button pressed");
        $.ajax({
          type:'POST',
          url:'/vote/'+ $(this).attr('id') + '/1';
        })
    });
});
