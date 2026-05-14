jQuery(document).ready(function() {

  if(window.navigator.userAgent.toLowerCase().indexOf("chrome") > 0) {
    jQuery("body").on("mousedown", ".bx-viewport a", function() { 
        if(jQuery(this).attr("href") && jQuery(this).attr("href") != "#") {
            window.location=jQuery(this).attr("href"); 
        } 
    }); 
  }

  jQuery('#site-navigation .menu-item-has-children').click(function(e){
    //console.log(e.target); return false;
    if(jQuery(e.target).parent().hasClass('menu-item-has-children')) {
      e.preventDefault();
      jQuery(this).children('ul.sub-menu').slideToggle('fast');
    }else if( jQuery(e.target).hasClass('welcome') ) {
      e.preventDefault();
      jQuery(this).children('ul.sub-menu').slideToggle('fast');
    } else {
      var url = jQuery(this).attr('href');
      window.location = url;
    }
  });

  jQuery('.header-search-mobile').on('click', function(){
    jQuery('.header-search').slideToggle('fast').addClass('search-open');
  });

  jQuery('#menu-toggle').on('click', function(){
    if ( jQuery('body').hasClass('scroll-disabled') ) {
      jQuery('#site-navigation').animate({ right: -250 }, 'fast', function() {
        jQuery('#menu-toggle').html('<i class="fa fa-bars"></i>');
        jQuery('body').removeClass('scroll-disabled');
      });
    } else {
      jQuery('#site-navigation').animate({ right: 0 }, 'fast', function() {
        jQuery('#menu-toggle').html('<i class="fa fa-bars menu-toggle-open"></i>');
        jQuery('body').addClass('scroll-disabled');
      });
    }
  });
    
  /** Lazy load **/
  var imgDefer = document.getElementsByTagName('img');
  for (var i=0; i<imgDefer.length; i++){
      var dataSrc = imgDefer[i].getAttribute('data-src');
      if( dataSrc ) {
          imgDefer[i].setAttribute( 'src', dataSrc );
          imgDefer[i].classList.add('display-img');
      }
  }

  /** Tabs **/
  jQuery('.tab-link').on('click', function(e)  {
      var tabId = jQuery(this).data('tab-id');

      // Show/Hide Tabs
      jQuery('#' + tabId).show().siblings().hide();

      // Change/remove current tab to active
      jQuery(this).addClass('active').siblings().removeClass('active');

      e.preventDefault();
  });

    // Filters on mobile
    jQuery('.filter-title').click(function(){
      jQuery('.filters-list').toggle();
    });

    /** Back to top */
    if (jQuery('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    jQuery('#back-to-top').addClass('show');
                } else {
                    jQuery('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        jQuery(window).on('scroll', function () {
            backToTop();
        });
        jQuery('#back-to-top').on('click', function (e) {
            e.preventDefault();
            jQuery('html,body').animate({
                scrollTop: 0
            }, 300);
        });
    }

});