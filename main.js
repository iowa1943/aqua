$(function(){
   
        $('.se2_slide').slick({
          autoplay: false,
          dots:false,
          slidesToShow:1
        });

        $('.se3_list').slick({
            autoplay:false,
            slidesToShow:3,
            slidesToScroll:1,
            infinite: false,
            arrows:false,
            dots:true
        });
       
        var sw1 = 0;
        $('.world').click(function(){
          if(sw1==0){
            $('.lang_site').slideDown(200);
            sw1=1
          }else{
            $('.lang_site').slideUp(200);
            sw1=0;
          }
        });

        
          $(document).mousedown(function( e ){
            if( $(".lang_site").is(":visible") ) {
              $(".lang_site").each(function(){
                var l_position = $(this).offset();
                l_position.right = parseInt(l_position.left) + ($(this).width());
                l_position.bottom = parseInt(l_position.top) + parseInt($(this).height());
        
                if( ( l_position.left <= e.pageX && e.pageX <= l_position.right )
                  && ( l_position.top <= e.pageY && e.pageY <= l_position.bottom ) ) {
                } else {
                  $(this).hide();
                }
              });
            }
          });
              
          // $('html, body').click(function(e){
          //   if(!$(e.target).hasClass('lang_site')){
          //     $('.lang_site').hide();
          //     $('.world').removeClass('on');
          //     sw1 = true;
          //   }
          // })

        var lnb = $("#scroll").offset().top;
  $(window).scroll(function() {
      var window = $(this).scrollTop();
      if(lnb <= window) {
        $(".header").addClass("on");
      } else {
        $(".header").removeClass("on");
      } 
  });

  var sw2= 0;
  $('.menu_bar').click(function(){
      if(sw2==0){
          $('.menu_bar').addClass('on');
          $('.menu_bar .line').addClass('on');
          $('.menu_bar .line2').addClass('on');
          $('.menu_bar .line3').addClass('on');
          $('.gnb').addClass('on');
          $('.header h1').addClass('on');
          $('.header').removeClass('on');
          $('body').css({'overflow':'hidden'})
          sw2=1
      }else{
         $('.menu_bar').removeClass('on')
          $('.menu_bar .line').removeClass('on')
          $('.menu_bar .line2').removeClass('on')
          $('.menu_bar .line3').removeClass('on')
          $('.gnb').removeClass('on')
          $('.header h1').removeClass('on')
          $('body').css({'overflow':'auto'})
        
          sw2=0
      }
     
  });

  var sw3 = 0;
  $('.depth1>li>a').click(function(){
      $(this).next().slideToggle().parent().siblings().find('.depth2').slideUp();
      $(this).parent().toggleClass('on').siblings().removeClass('on');
  }) 

  var sw4= 0;
  $('.xline').click(function(){
      if(sw4==0){
          $('.q_menu').addClass('on');
          $('.xline1').addClass('on');
          $('.xline2').addClass('on');
          sw4=1
      }else{
         $('.q_menu').removeClass('on')
         $('.xline1').removeClass('on')
         $('.xline2').removeClass('on')
          sw4=0
      }
      
      })

    })
