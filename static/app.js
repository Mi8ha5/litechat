$("#title").html("<center><h2>Простенький Чат</h2>");
 $("#output").click(function (){
   var phbook = {
        "name" : $("#username").val(),
        "message" : $("#message").val(),
      };
      alert($("#username").val()+"!!!"+$("#message").val());
      $.ajax({
        url: '/chat',
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(phbook),
      success: function(res){
        $("#chatText").html(res);
      }
    });
 });
