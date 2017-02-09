
/* headerFixed */
function headerFixed(){
    if ( $('.header-fixed').length ) {
        var topbar_h = $('.header__top').innerHeight();
        var header_h = $('.header').innerHeight();
        if ( $(window).scrollTop() > (topbar_h+header_h) )
            $('.header-fixed').addClass('active');
        else
            $('.header-fixed').removeClass('active');

        // scroll
        $(window).scroll(function(){
            if ( $(window).scrollTop() > (topbar_h+header_h) )
                $('.header-fixed').addClass('active');
            else
                $('.header-fixed').removeClass('active');
        });

        // header-menu-link
        if ( $('.header-menu-link').length ) {
            $('.header-menu-link').on('click',function(e){
                var cur = $(this);
                if ( cur.hasClass('active') )
                    cur.html('menu');
                else
                    cur.html('close');
                cur.toggleClass('active');
                $('.header-fixed .nav').toggleClass('active');
                e.preventDefault();
            });
        }
    }
}
/* headerFixed end */
$(document).ready(function() {

  $('#pin-1').hover(
       function(){ $(this).addClass('bounce',100000) },
    function(){ $(this).removeClass('bounce',1000) }
 );
  $('#pin-2').hover(
       function(){ $(this).addClass('bounce') },
       function(){ $(this).removeClass('bounce') }
);
  $('#street-1').hover(
       function(){ $('#pin-1').addClass('bounce') },
       function(){ $('#pin-1').removeClass('bounce') }
);
  $('#street-2').hover(
       function(){ $('#pin-2').addClass('bounce') },
       function(){ $('#pin-2').removeClass('bounce') }
);

 headerFixed();





$('a.nice-link').each(function () {
  $(this).attr('data-text', $(this).text());
});
$('.single-slide').slick(
{
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
   slidesToScroll: 1,
  autoplay: true,
	adaptiveHeight: true,
    autoplaySpeed: 5000,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	
}
	);

$('.clients-slide').slick({
  dots: false,
  infinite: true,
  speed: 300,
  variableWidth: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
 nextArrow: '.next-c',
  prevArrow: '.prev-c',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        variableWidth: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});
(function (window, $) {
  
  $(function() {
    
    
    $('.ripple').on('click', function (event) {
      event.preventDefault();
      
      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;
      

      
      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");
      
      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        }) 
        .appendTo($(this));

      window.setTimeout(function(){
        $div.remove();
      }, 2000);
    });
    
  });
  




})(window, jQuery);

(function() {
        // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        if (!String.prototype.trim) {
          (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
              return this.replace(rtrim, '');
            };
          })();
        }

        [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
          // in case the input is already filled..
          if( inputEl.value.trim() !== '' ) {
            classie.add( inputEl.parentNode, 'input--filled' );
          }

          // events:
          inputEl.addEventListener( 'focus', onInputFocus );
          inputEl.addEventListener( 'blur', onInputBlur );
        } );

        function onInputFocus( ev ) {
          classie.add( ev.target.parentNode, 'input--filled' );
        }

        function onInputBlur( ev ) {
          if( ev.target.value.trim() === '' ) {
            classie.remove( ev.target.parentNode, 'input--filled' );
          }
        }
      })();