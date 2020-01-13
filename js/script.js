$('[type="button"]').click(function() {
  $.post( 
  
  "submit.php", //url
  
  { //данные из формы
    email: $('[name="email"]').val(),
    name: $('[name="name"]').val(),
    phone: $('[name="phone"]').val(),
    message: $('[name="message"]').val()
  }, 
  
  function( data ) { //после отправки данных
    $( ".result" ).html(data);
  }
  
  );
});