// choies' Script v_210425

// for Porfilo item json
// ----------------------------------------------------------------------------!
$(document).ready(function(){


  portfolioHeight();
  indexAni();

        
  $.ajax({

      url:"js/portfilo.json",
      type: 'GET',
      dataType: 'json'

  }).done(function(json){
    
    console.log('getJson!!')
    var html = "";

    $(".project_item").html('');

    $.each(json, function(idx, row) {
      
      html = $("#portfolioItem").html()
      .replace(/{project}/gi, row.project)
      .replace(/{date}/gi, row.date)
      .replace(/{url}/gi, row.url)
      .replace(/{info}/gi, row.info)
      .replace(/{bgColor}/gi, row.bgColor)
      .replace(/{img_0}/gi, row.img[0])
      .replace(/{img_1}/gi, row.img[1])

      $(".project_item").append(html);
    });
  })

});

// window ready
// ----------------------------------------------------------------------------!
$(document).ready(function(){
  


});


// window resize
// ----------------------------------------------------------------------------!
$(window).resize(function() {

  portfolioHeight();

});



// Function Declarations
// ----------------------------------------------------------------------------!

function portfolioHeight(){


  if  (matchMedia("screen and (min-width: 1239px)").matches) {
    
    $('.project_item .item').width($('.project_item .item').height() * 0.8 )

  }

}


function indexAni(){

  scrollAni();

  $(window).scroll( function(){ scrollAni(); });

    function scrollAni(){

    var bottom_of_window = $(window).scrollTop() + $(window).height();

    $('.txt_inner .title div').each( function(i){
      
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      
      if( bottom_of_window > bottom_of_object ){
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }
}


function modalShow(){

  $('.item').click(function(){

    console.log('modalShow!');

    let detail = $(this).html();


    $('.modal').fadeIn(300);
    $('.madal_contnet').html(detail);
    $('body').css("overflow","hidden");
    $('.madal_contnet .project_txt').delay(200).animate({ paddingTop: '10vh'},800, 'swing');
    $('.madal_contnet .project_txt *').delay(200).animate({ opacity: '1'},800, 'swing');

  });

}


function modalClose(){

  $('.modal').fadeOut(300);
  $('.madal_contnet').html('');
  $('body').css("overflow","overlay");
}





// main text motion
// ----------------------------------------------------------------------------!
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