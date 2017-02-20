$("#title").html("<center><h2>Простенький Чат</h2>");
 $("#output").click(function (){
   var message = {
        "name" : $("#username").val(),
        "message" : $("#message").val(),
      };
      alert($("#username").val()+"!!!"+$("#message").val());
      $.ajax({
        url: '/chat',
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(message),
      success: function(res){
        alert(JSON.stringify(res));
      }
    });
 });
 $("#reload").click(function(){
   alert("LOAD");
   $.ajax({
     url:"/load",
     type: "GET",
     
     success: function(res){
       $("#chatText").html(JSON.stringify(res));
     }
   });
 });
