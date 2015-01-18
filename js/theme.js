var $body = $('body'),
  $modal = $('#config'),
  $modalClose = $('#config').find('.close'),
  $modalConfirm = $('#config').find('.confirm'),
  $fullScreenLayer = $('#fullScreen'),
  $setupSelect = $('#config').find('.ipad-select--device-chosen'),
  $modalCheckbox = $('#fullscreenCheck'),
  $viewContent = $('.view--content-container');

$modal.modal('show'); 
$body.addClass('view-all');

$setupSelect.click(function() {
  $modal.modal('hide');
  $body.addClass('animated');
  $body.removeClass('view-all');

  if(!$modalCheckbox.is(":checked")) {
    $fullScreenLayer.addClass('hidden');
  }

  if($(window).width() < 992) {
    var el = document.documentElement, 
      rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen;
    rfs.call(el);
  }
});

$modalClose.click(function() {
  $body.removeClass('view-all');
  $fullScreenLayer.addClass('hidden');
});



$viewContent.swipe({
  pinchOut:function(event, direction, distance, duration, fingerCount, pinchZoom) {
    $body.addClass('view-all');
  },
  pinchIn:function(event, direction, distance, duration, fingerCount, pinchZoom) {
    $body.removeClass('view-all');
  },
  tap:function() {
    $(this).toggleClass('flip');
  },
  fingers:2,  
  pinchThreshold:0  
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
