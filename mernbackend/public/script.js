var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter=1;
    }
}, 4000);

// Chatbot
$(document).ready(function(){
    $('.chat_icon').click(function(event) {
      $('.chat_box').toggleClass('active');
      $('.conv-form-wrapper').convform({selectInputStyle: 'disable'});
  
    });
  
  });
  //Chatbot End