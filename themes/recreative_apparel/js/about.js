$(function(){

    if($('#progressAbout')){
  
      const postLength = $('#blogCarousel')[0].scrollWidth;
      const wrapperWidth = $('#blogCarousel')[0].clientWidth;
      let scrollLeftAmount = $('#blogCarousel')[0].scrollLeft;
      let updateProgress = ((wrapperWidth + scrollLeftAmount)/postLength);
      $('#progressAbout').width(`${updateProgress*100}%`);
  
      $('#blogCarousel').on('scroll', function(){
        scrollLeftAmount = $('#blogCarousel')[0].scrollLeft;
        updateProgress = ((wrapperWidth + scrollLeftAmount)/postLength) ;
  
        $('#progressAbout').width(`${updateProgress*100}%`);
  
      })
    }
  
  })
  
  