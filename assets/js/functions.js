$(document).ready(function () {	
	$.fn.center = function () {
     this.css("top", ( $(window).outerHeight() - this.outerHeight() ) / 2  + "px");
     this.css("left", ( $(window).outerWidth() - this.outerWidth() ) / 2 + "px");
     return this;
  }

  $('article').click(function(){		
    var modal = $(this).attr('data-modal');
    var selectedmodal = $('.modal.'+modal);
		selectedmodal.fadeIn().center();
    $('.fade').fadeIn();
    
	});
  $('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    items: 1
  })
  $('.modal .close-btn, .fade').click(function(){
    $('.modal').fadeOut();
    $('.fade').fadeOut('');
  });

  $(document).keyup(function(e) {
     if (e.keyCode == 27) { 
        $('.modal').fadeOut();
        $('.fade').fadeOut();
    }
  });

  

});