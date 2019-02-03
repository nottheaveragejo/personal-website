/*Nav logic*/

     $(function() {
          $('.toggle').on('click',function() {
            $('.main-nav ul').toggleClass('open');
            $('.main-nav').toggleClass('open');
          });
        });
	
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
//sticky nav logic


$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('.main-nav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('.main-nav').removeClass('navbar-fixed');
    }
  });
});

//hover over technologies animation
const animation = document.querySelectorAll('.tech-icon');
animation.addEventListener("click", function(){
  console.log('its working');
})
console.log(animation);
// addEventListener("click", function(){console.log("its working")})

// $(function(){
//   $('.fab').on('mouseover')
// }document).getElementByClassName('fab');
// social.addEventListener('mouseover', console.log('its work'))
