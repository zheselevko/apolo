
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

/* mobileFn */
function mobileFn(){
    // HEADER
    // header-mobile-menu-link
    if ( $('.header-mobile-menu-link').length ) {
        $('.header-mobile-menu-link').on('click',function(e){
            var cur = $(this);
            var parent = cur.parents('.header-mobile');
            $('.header-mobile-menu:visible,.header-mobile-search:visible,.modal-callback:visible').fadeOut();
            if ( cur.hasClass('active') ){
                cur.removeClass('active');
                parent.find('.header-mobile-menu').fadeOut();
                cur.html('menu');
            } else {
                $('.header-mobile-menu-link,.header-mobile-search-link,.header-mobile-phone-link').removeClass('active');
                cur.addClass('active');
                parent.find('.header-mobile-menu').fadeIn();
                cur.html('close');
            }
            e.preventDefault();
        });
    }

    // header-mobile-search-link
    if ( $('.header-mobile-search-link').length ) {
        $('.header-mobile-search-link').on('click',function(e){
            var cur = $(this);
            var parent = cur.parents('.header-mobile');
            $('.header-mobile-menu:visible,.header-mobile-search:visible,.modal-callback:visible').fadeOut();
            if ( cur.hasClass('active') ){
                cur.removeClass('active');
                parent.find('.header-mobile-search').fadeOut();
            } else {
                $('.header-mobile-menu-link').html('menu');
                $('.header-mobile-menu-link,.header-mobile-search-link,.header-mobile-phone-link').removeClass('active');
                cur.addClass('active');
                parent.find('.header-mobile-search').fadeIn();
            }
            e.preventDefault();
        });
    }

    // header-mobile-phone-link
    if ( $('.header-mobile-phone-link').length ) {
        $('.header-mobile-phone-link').on('click',function(e){
            var cur = $(this);
            var parent = cur.parents('.header-mobile');
            $('.header-mobile-menu:visible,.header-mobile-search:visible,.modal-callback:visible').hide();
            $('.modal-callback').removeClass('modal-callback--bottom');
            if ( cur.hasClass('active') ){
                cur.removeClass('active');
                $('.modal-callback').fadeOut();
            } else {
                $('.header-mobile-menu-link,.header-mobile-search-link,.header-mobile-phone-link').removeClass('active');
                cur.addClass('active');
                if ( parent.hasClass('header-mobile--footer') )
                    $('.modal-callback').addClass('modal-callback--bottom');
                $('.modal-callback').fadeIn();
            }

            e.preventDefault();
        });
    }

    // CATEGORY
    // sidebar
    if ( $('.sidebar').length && $('.mobile-res').is(':visible') ) {
        $('.sidebar').insertAfter($('.products__sort'));

        // toggle
        $('.side-filters__title').on('click',function(){
            var cur = $(this);
            var parent = cur.parents('.side-filters');
            if ( parent.hasClass('active') ){
                $('.side-filters__title i').html('filter_list');
            } else {
                $('.side-filters__title i').html('close');
            }
            $('.side-filters__content').fadeToggle();
            parent.toggleClass('active');
        });
    }

    // PRODUCT
    // product-full-actions
    if ( $('.product-full-actions').length && $('.mobile-res').is(':visible') ) {
        $('.product-full-actions').insertAfter($('.product-full-images'));
        $('.share-list').insertAfter($('.product-full-actions'));
    }

    // COMPARE
    if ( $('.block-compare__left-top .switch').length && $('.mobile-res').is(':visible') ) {
        $('.block-compare__left-top .switch').appendTo($('.block-compare'));
    }
}
/* mobileFn end */


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
 mobileFn();





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
        slidesToShow: 2,
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


      (function($){
  $(function(){

    var window_width = $(window).width();

    // convert rgb to hex value string
    function rgb2hex(rgb) {
      if (/^#[0-9A-F]{6}$/i.test(rgb)) { return rgb; }

      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

      if (rgb === null) { return "N/A"; }

      function hex(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2);
      }

      return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    $('.dynamic-color .col').each(function () {
      $(this).children().each(function () {
        var color = $(this).css('background-color'),
            classes = $(this).attr('class');
        $(this).html(rgb2hex(color) + " " + classes);
        if (classes.indexOf("darken") >= 0 || $(this).hasClass('black')) {
          $(this).css('color', 'rgba(255,255,255,.9');
        }
      });
    });

    // Floating-Fixed table of contents
    setTimeout(function() {
      var tocWrapperHeight = 260; // Max height of ads.
      var tocHeight = $('.toc-wrapper .table-of-contents').length ? $('.toc-wrapper .table-of-contents').height() : 0;
      var socialHeight = 95; // Height of unloaded social media in footer.
      var footerOffset = $('body > footer').first().length ? $('body > footer').first().offset().top : 0;
      var bottomOffset = footerOffset - socialHeight - tocHeight - tocWrapperHeight;

      if ($('nav').length) {
        $('.toc-wrapper').pushpin({
          top: $('nav').height(),
          bottom: bottomOffset
        });
      }
      else if ($('#index-banner').length) {
        $('.toc-wrapper').pushpin({
          top: $('#index-banner').height(),
          bottom: bottomOffset
        });
      }
      else {
        $('.toc-wrapper').pushpin({
          top: 0,
          bottom: bottomOffset
        });
      }
    }, 100);



    // BuySellAds Detection
    var $bsa = $(".buysellads"),
        $timesToCheck = 3;
    function checkForChanges() {
        if (!$bsa.find('#carbonads').length) {
          $timesToCheck -= 1;
          if ($timesToCheck >= 0) {
            setTimeout(checkForChanges, 500);
          }
          else {
            var donateAd = $('<div id="carbonads"><span><a class="carbon-text" href="#!" onclick="document.getElementById(\'paypal-donate\').submit();"><img src="images/donate.png" /> Help support us by turning off adblock. If you still prefer to keep adblock on for this page but still want to support us, feel free to donate. Any little bit helps.</a></form></span></div>');

            $bsa.append(donateAd);
          }
        }

    }
    checkForChanges();


    // BuySellAds Demos close button.
    $('.buysellads.buysellads-demo .close').on('click', function() {
      $(this).parent().remove();
    });


    // Github Latest Commit
    if ($('.github-commit').length) { // Checks if widget div exists (Index only)
      $.ajax({
        url: "https://api.github.com/repos/dogfalo/materialize/commits/master",
        dataType: "json",
        success: function (data) {
          var sha = data.sha,
              date = jQuery.timeago(data.commit.author.date);
          if (window_width < 1120) {
            sha = sha.substring(0,7);
          }
          $('.github-commit').find('.date').html(date);
          $('.github-commit').find('.sha').html(sha).attr('href', data.html_url);
        }
      });
    }

    // Toggle Flow Text
    var toggleFlowTextButton = $('#flow-toggle');
    toggleFlowTextButton.click( function(){
      $('#flow-text-demo').children('p').each(function(){
          $(this).toggleClass('flow-text');
        });
    });

//    Toggle Containers on page
    var toggleContainersButton = $('#container-toggle-button');
    toggleContainersButton.click(function(){
      $('body .browser-window .container, .had-container').each(function(){
        $(this).toggleClass('had-container');
        $(this).toggleClass('container');
        if ($(this).hasClass('container')) {
          toggleContainersButton.text("Turn off Containers");
        }
        else {
          toggleContainersButton.text("Turn on Containers");
        }
      });
    });

    // Detect touch screen and enable scrollbar if necessary
    function is_touch_device() {
      try {
        document.createEvent("TouchEvent");
        return true;
      } catch (e) {
        return false;
      }
    }
    if (is_touch_device()) {
      $('#nav-mobile').css({ overflow: 'auto'});
    }

    // Set checkbox on forms.html to indeterminate
    var indeterminateCheckbox = document.getElementById('indeterminate-checkbox');
    if (indeterminateCheckbox !== null)
      indeterminateCheckbox.indeterminate = true;


    // Pushpin Demo Init
    if ($('.pushpin-demo-nav').length) {
      $('.pushpin-demo-nav').each(function() {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
          top: $target.offset().top,
          bottom: $target.offset().top + $target.outerHeight() - $this.height()
        });
      });
    }

    // CSS Transitions Demo Init
    if ($('#scale-demo').length &&
        $('#scale-demo-trigger').length) {
      $('#scale-demo-trigger').click(function() {
        $('#scale-demo').toggleClass('scale-out');
      });
    }

    // Swipeable Tabs Demo Init
    if ($('#tabs-swipe-demo').length) {
      $('#tabs-swipe-demo').tabs({ 'swipeable': true });
    }

    // Plugin initialization
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.carousel').carousel();
    $('.slider').slider();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav({'edge': 'left'});
    $('.datepicker').pickadate({selectYears: 20});
    $('select').not('.disabled').material_select();
    $('input.autocomplete').autocomplete({
      data: {"Apple": null, "Microsoft": null, "Google": 'http://placehold.it/250x250'}
    });

    // Chips
    $('.chips').material_chip();
    $('.chips-initial').material_chip({
      readOnly: true,
      data: [{
        tag: 'Apple',
      }, {
        tag: 'Microsoft',
      }, {
        tag: 'Google',
      }]
    });
    $('.chips-placeholder').material_chip({
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag',
    });
    $('.chips-autocomplete').material_chip({
      autocompleteData: {
        'Apple': null,
        'Microsoft': null,
        'Google': null
      }
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space