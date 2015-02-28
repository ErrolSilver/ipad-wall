var $body = $('body'),
  $modal = $('#config'),
  $modalClose = $('#config').find('.close'),
  $modalConfirm = $('#config').find('.confirm'),
  $fullScreenLayer = $('#fullScreen'),
  $setupSelect = $('#config').find('.ipad-select--device-chosen'),
  $modalCheckbox = $('#fullscreenCheck'),
  $viewContent = $('.view--content-container');

 FastClick.attach(document.body);


$modal.modal('show'); 
$body.addClass('view-all');

$setupSelect.click(function() {
  var hash = location.hash;

  $modal.modal('hide');
  $body.removeClass('view-all');

  if(!$modalCheckbox.is(":checked")) {
    $fullScreenLayer.addClass('hidden');
  }
});

$modalClose.click(function() {
  $body.removeClass('view-all');
  $fullScreenLayer.addClass('hidden');
});



$viewContent.click(function() {
  $(this).addClass('flip');
});


$fullScreenLayer.swipe({
  pinchOut:function(event, direction, distance, duration, fingerCount, pinchZoom) {
    $body.addClass('view-all');
  },
  pinchIn:function(event, direction, distance, duration, fingerCount, pinchZoom) {
    $body.removeClass('view-all');
  },
  fingers:2,  
  pinchThreshold:0  
});

var swiper = new Swiper('.swiper-container');

$('.swiper-slide').last().addClass('last-slide');



var tapped=false;
$('.last-slide').on("touchstart",function() {
  if(!tapped) { 
    tapped=setTimeout(function() {
      tapped = null;
    }, 300);   
  } else {  
    clearTimeout(tapped);
    tapped = null;
    $('.swiper-slide').removeClass('swiper-slide-prev').removeClass('swiper-slide-active');
    $('.swiper-slide').first().addClass('swiper-slide-active');
    $viewContent.removeClass('flip');
    setTimeout(function() {
      $('.swiper-wrapper').attr('style', '');
    }, 500);
  }
});
