$(function() {
  console.log('hi');
 
  
  if (window.location.search === '?page_id=18') {




    let modelCtrl = (function() {
      let data, max, percentage, degree, hScreen;

      return {
        calculateScroll: function(info,textR) {
          max = $('.wheelPercentage')['0'].offsetTop;
          data = info.path[1].pageYOffset - textR;
          hScreen = info.path[1].outerHeight;
          percentage = Math.round((data / (max- textR - hScreen / 2)) * 100);
          console.log('data=' + data + 'percentage=' + percentage + 'max=' + max + 'hScreen=' + hScreen );
          percentage = percentage > 100 ? 100 : percentage;
          degree = Math.round(percentage * 3.6);
        },

        getImgWidth: function() {
          let imageWidth;
          imageWidth = $('.imageBackground')['0'].clientWidth;
          return imageWidth / 420;
        },

        getScrollValue: function() {
          return degree;
        }
      };
    })();

    let viewCtrl = (function () {
        let DOMStrings = {
            'scroll': '.wheel',
            'imageBack': '.imageBackground'
        };

        return {

            displayScroll: function (deg, imageW) {
                if(window.innerWidth>425){
                $(DOMStrings.scroll).css('transform', `rotate(${deg}deg)`);
                $(DOMStrings.imageBack).css('left', (150 - (deg * imageW))+"%");
                }
            }
        };
    })();

    let controller = function(view, model) {
      window.onscroll = function(e) {

        let windowY = window.pageYOffset;
        let textR = $('.text-recycle').offset().top;

        if(windowY>textR){
        let movement, imageWidth;

        // calculate values
        model.calculateScroll(e,textR);

        // obtain Values from scroll

        movement = model.getScrollValue();
        imageWidth = model.getImgWidth();

        //create the view changes

        view.displayScroll(movement, imageWidth);
      }
      };
    };

    controller(viewCtrl, modelCtrl);

    // I will change to the MVC model once I have worked more on it.

    $('.fa-angle-down').on('click', function(e) {
      e.preventDefault();

      $('html, body').animate(
        {
          scrollTop: $(window).scrollTop() + 520
        },
        1500,
        'linear'
      );
    });

    $('.fa-angle-up').on('click', function(e) {
      e.preventDefault();

      $('html, body').animate(
        {
          scrollTop: $(window).scrollTop() - 520
        },
        1500,
        'linear'
      );
    });

    /* Testing mobile
     */

    let movement = 0;
    $('.imageHolder').on({
      touchstart: function(initialTouch) {
        let initialValue = 0;
        $('.imageHolder').on({
          touchmove: function(e) {
            let maxWidth, currentX;
            initialValue = initialTouch.touches[0].clientX;

            maxWidth =
              $('.lateralMovement')[0].scrollWidth - window.innerWidth * 1.12;
            currentX = e.touches[0].clientX;
            if (currentX <= initialValue) {
              movement -= 1;
            } else if (currentX > initialValue) {
              movement += 2;
            }

            $('.wheelPa').css('box-shadow', '2px 2px 10px #0545b2');

            if (movement > -maxWidth && movement < 1) {
              $('.lateralMovement').css('margin-left', movement);
            }

            /*  if(currentX<initialValue && movement>-maxWidth){
                     
                     } else if (currentX>initialValue && movement<1){
                      $('.lateralMovement').css('margin-left', movement );
                     } */
          }
        });
      }
    });

    $('.imageHolder').on({
      touchend: function() {
        $('.wheelPa').css('box-shadow', 'none');
      }
    });
  }
});
