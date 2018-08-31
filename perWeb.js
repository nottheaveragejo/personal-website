/*Nav logic*/

	
//social icon animations


//scroll logic
 $(document).ready(function(){
      $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);

      $('html, body').animate({
        'scrollTop': $target.offset().top
      }, 1000, 'swing', function(){
        window.location.hash = target;
      });
      });
    });


//mobile menu and hamburger

  // Works everywhere
$(document).ready(function () {

  // Hide/show animation hamburger function
  $('.navbar-toggler').on('click', function () {

    // Take this line to first hamburger animations
    $('.animated-icon1').toggleClass('open');

  });

});
/*mobile logic*/
