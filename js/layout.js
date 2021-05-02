// choies' Script v_210425

// for Porfilo item json
// ----------------------------------------------------------------------------!

// window ready
// ----------------------------------------------------------------------------!
$(document).ready(function(){
	
});


// window resize
// ----------------------------------------------------------------------------!
$(window).resize(function() {

});



// Function Declarations
// ----------------------------------------------------------------------------!



// main text motion
document.addEventListener('DOMContentLoaded',function(event){

  var dataText = [ "UI/UX", "Visual design", "Publishing", "Think. Make. Creative." ];

  function typeWriter(text, i, fnCallback) {

    if (i < (text.length)) {

      document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);

    }

    else if (typeof fnCallback == 'function') {

      setTimeout(fnCallback, 700);

    }
  }
  
   function StartTxtmotion(i) {
     
    if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTxtmotion(0);
        }, 20000);
     }

    else if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTxtmotion(i + 1);
     });
    }
  }

  StartTxtmotion(0);
});