/*
  javascript file.
* Author URI: https://themeforest.net/user/colorfuldesign
*/

(function ($) { "use strict";

    $(document).ready(function () {

      // Page Loader // --------------------------
      setTimeout(function(){
      		$('body').addClass('loaded');
    	}, 3000);

      // Mobile Menu Title // --------------------------

      var trigger = $('.nav-mobile-btn'),
        overlay = $('.overlay'),
         isClosed = false;

        trigger.click(function () {
          navmobilebtn_cross();
        });

          function navmobilebtn_cross() {

            if (isClosed == true) {
              overlay.hide();
              trigger.removeClass('is-open');
              trigger.addClass('is-closed');
              isClosed = false;
            } else {
              overlay.show();
              trigger.removeClass('is-closed');
              trigger.addClass('is-open');
              isClosed = true;
            }
        }

        $('[data-toggle="offcanvas"]').click(function () {
              $('#wrapper').toggleClass('toggled');
        });

          var $NavSection = $('#nav-section');
          $NavSection.waypoint('sticky');
          $('.home-page').waypoint(function (dir) {
              if (dir === "down") {
                  $NavSection.addClass('navshrink');
              } else {
                  $NavSection.removeClass('navshrink');
              }
          }, { offset: -250 });
          $('.default-page').waypoint(function (dir) {
              if (dir === "down") {
                  $NavSection.addClass('navshrink');
              } else {
                  $NavSection.removeClass('navshrink');
              }
          }, { offset: -150 });


    // Pasta Price Item Slide  // --------------------------
    //     START   //
      var sync1 = $("#item-images");
      var sync2 = $("#item-thumbs");
      var slidesPerPage = 4; //globaly define number of elements per page
      var syncedSecondary = true;

      sync1.owlCarousel({
        items:1,
        loop:true,
        smartSpeed: 1000,
        nav:true,
        dots:false,
        responsiveRefreshRate : 200,
        responsive:{
          0:{items:1},
         },
        navText : ["<i class='owl-prev-icon owl-button-icons'></i>","<i class='owl-next-icon owl-button-icons'></i>"],
      }).on('changed.owl.carousel', syncPosition);

      sync2
      .on('initialized.owl.carousel', function () {
           sync2.find(".owl-item").eq(0).addClass("current");
       })

      .owlCarousel({
        items : slidesPerPage,
        nav:false,
        dots:false,
        smartSpeed: 600,
        slideSpeed : 500,
        responsive:{
           0:{items:4},
           479:{items:4},
           768:{items:4},
           979:{items:5},
           1199:{items:5},
         },
        responsiveRefreshRate : 100,

      }).on('changed.owl.carousel', syncPosition2);

      function syncPosition(el) {
          //if you set loop to false, you have to restore this next line
          //var current = el.item.index;

          //if you disable loop you have to comment this block
          var count = el.item.count-1;
          var current = Math.round(el.item.index - (el.item.count/2) - .5);

          if(current < 0) {
            current = count;
          }
          if(current > count) {
            current = 0;
          }

          //end block

            sync2
              .find(".owl-item")
              .removeClass("current")
              .eq(current)
              .addClass("current");
            var onscreen = sync2.find('.owl-item.active').length - 1;
            var start = sync2.find('.owl-item.active').first().index();
            var end = sync2.find('.owl-item.active').last().index();

            if (current > end) {
              sync2.data('owl.carousel').to(current, 300, true);
            }
            if (current < start) {
              sync2.data('owl.carousel').to(current - onscreen, 300, true);
            }
          }

      function syncPosition2(el) {
        if(syncedSecondary) {
          var number = el.item.index;
          sync1.data('owl.carousel').to(number, 400, true);
        }
      }

      sync2.on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 600, true);
      });
      //  END  //


        // Old School Clock // --------------------------
        // https://css-tricks.com/css3-clock/
         setInterval( function() {
         var seconds = new Date().getSeconds();
         var sdegree = seconds * 6;
         var srotate = "rotate(" + sdegree + "deg)";

         $("#sec").css({"-moz-transform" : srotate, "-webkit-transform" : srotate, "transform": srotate});

         }, 1000 );

         setInterval( function() {
         var hours = new Date().getHours();
         var mins = new Date().getMinutes();
         var hdegree = hours * 30 + (mins / 2);
         var hrotate = "rotate(" + hdegree + "deg)";

         $("#hour").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate, "transform": hrotate});

         }, 1000 );

         setInterval( function() {
         var mins = new Date().getMinutes();
         var mdegree = mins * 6;
         var mrotate = "rotate(" + mdegree + "deg)";

         $("#min").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate, "transform": mrotate});

         }, 1000 );


         //  TABS // --------------------------
        $('.tabs .tab-links a').on('click', function(e)  {
            var currentAttrValue = $(this).attr('href');

            // Show/Hide Tabs
            $('.tabs ' + currentAttrValue).show().siblings().hide();

            // Change/remove current tab to active
            $(this).parent('li').addClass('active').siblings().removeClass('active');

            e.preventDefault();
        });


        // Adds ios class to html tag // --------------------------
          var deviceAgent = navigator.userAgent.toLowerCase();
          var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
              if (agentID) {

            $('.video-background').addClass('ios');

          };


          // Progress bars // --------------------------
           $('.progress .progress-bar').progressbar({display_text: 'fill'});


         // Datepiker: Format Date Time
         ///  https://eonasdan.github.io/bootstrap-datetimepicker/
            $('#dp-time').datetimepicker({
                format: 'LT'
            });
            $('#dp-date').datetimepicker( {

              format: 'DD/MM/YYYY'
            });
			$('#cikis').datetimepicker( {

              format: 'DD/MM/YYYY'
            });

          // Footer Button to Top // --------------------------
          //
           $('.scrollTopButton').on("click", function () {
               $("body,html").animate({scrollTop: 0}, 1200);
               return false;
           });

           // Special Menu// --------------------------
           $(".special-menu-slider").owlCarousel({
               loop:true,
               nav:true,
               dots:false,
               autoplay:true,
               smartSpeed: 800,
               navText : ["<i class='owl-prev-icon owl-button-icons'></i>","<i class='owl-next-icon owl-button-icons'></i>"],
               responsive:{
                   0:{items:1},
                   479:{items:2},
                   768:{items:2},
                   979:{items:3},
                   1199:{items:3}
                },
           });


           // Thef Team // --------------------------
           $(".owl-chef-team-slider").owlCarousel({
             loop:true,
             nav:true,
             dots:false,
             autoplay:true,
             smartSpeed: 800,
             navText : ["<i class='owl-prev-icon owl-button-icons'></i>","<i class='owl-next-icon owl-button-icons'></i>"],
             responsive:{
                 0:{items:1},
                 479:{items:2},
                 768:{items:2},
                 979:{items:3},
                 1199:{items:4}
              },
           });

           // Testimonials // --------------------------
           $(".owl-testimonials").owlCarousel({
             loop:true,
             nav:false,
             dots:true,
             autoplay:true,
             smartSpeed: 800,
             navText : ["<i class='owl-prev-icon owl-button-icons'></i>","<i class='owl-next-icon owl-button-icons'></i>"],
             responsive:{
                 0:{items:1},
              },
           });

           // Featured Recipe // --------------------------
           $(".owl-featured-recipe").owlCarousel({
             loop:true,
             nav:true,
             dots:false,
             autoplay:true,
             smartSpeed: 800,
             slideSpeed : 800,
             navText : ["<i class='owl-prev-icon owl-button-icons'></i>","<i class='owl-next-icon owl-button-icons'></i>"],
             responsive:{
                 0:{items:1},
                 479:{items:2},
                 768:{items:2},
                 979:{items:2},
                 1199:{items:2}
              },
            });

           // ISOTOPE//--------------------------

          if($('.menu-items-list').length){
              var defaultFilter=$('.tagsort-active')
              .attr('data-filter');

              var $grid=$('.menu-items-list')

              .isotope({itemSelector:'.menu-item',layoutMode:'fitRows',filter:defaultFilter});

              $('.menu-button-filter').on('click','li',function(){

              $('.menu-button-filter li').removeClass('tagsort-active');

              $(this).toggleClass('tagsort-active');

              var filterValue=$(this).attr('data-filter');

                $grid.isotope({filter:filterValue})
              ;}
            );
          };


          // Header background image //
          $( ".header-background" ).each(function() {
            var attr = $(this).attr('data-image-src');
            var $item = $(this);

            if (typeof attr !== typeof undefined && attr !== false) {
                $(this).css('background', 'url('+attr+') no-repeat');
            }
            $item.css({'background-position': 'center', 'background-size': 'cover'});
          });

          // Adverst image background //
          $( ".advert-image" ).each(function() {
            var attr = $(this).attr('data-image-src');
            var $item = $(this);

            if (typeof attr !== typeof undefined && attr !== false) {
                $(this).css('background', 'url('+attr+') no-repeat');
            }
            $item.css({'background-position': 'center', 'background-size': 'cover'});
          });


          // About frame images //

          $( ".frame-image" ).each(function() {
            var attr = $(this).attr('data-image-src');
            var $item = $(this);
            if (typeof attr !== typeof undefined && attr !== false) {
                $(this).css('background', 'url('+attr+') no-repeat');
            }
            $item.css({'background-position': 'top center', 'background-size': 'cover', 'min-height': '600px', 'height': '100%'});

          });


          // Item image //
          $( ".view-image" ).each(function() {
            var attr = $(this).attr('data-image-src');
            var $item = $(this);

            if (typeof attr !== typeof undefined && attr !== false) {
                $(this).css('background', 'url('+attr+') no-repeat');
            }
              $item.css({'background-position': 'center', 'background-size': 'cover'});
          });


            // Mobile Menu Overlay Background //

            $( ".overlay" ).each(function() {
              var attr = $(this).attr('data-image-src');
              var $item = $(this);

              if (typeof attr !== typeof undefined && attr !== false) {
                  $(this).css('background', 'url('+attr+') no-repeat');
              }
              $item.css({'background-position': 'center', 'background-size': 'cover'});
            });

            // Accordion // --------------------------
            function toggleIcon(e) {
               $(e.target)
                   .prev('.panel-heading')
                   .find(".more-less")
                   .toggleClass('glyphicon-plus glyphicon-minus');
              }
             $('.panel-group').on('hidden.bs.collapse', toggleIcon);
             $('.panel-group').on('shown.bs.collapse', toggleIcon);

    });
}(jQuery));
