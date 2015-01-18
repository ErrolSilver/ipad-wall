var $body = $('body'),
  $modal = $('#config'),
  $modalClose = $('#config').find('.close'),
  $modalConfirm = $('#config').find('.confirm'),
  $fullScreenLayer = $('#fullScreen'),
  $setupSelect = $('#config').find('.ipad-select--device-chosen'),
  $modalCheckbox = $('#fullscreenCheck'),
  $viewContent = $('.view--content-container');

$modal.modal('show'); 
$modal.draggable();
$body.addClass('view-all');

$setupSelect.click(function() {
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

$viewContent.on('mousedown', function() {
  $(this).toggleClass('flip');
});

document.documentElement.requestFullscreen();
window.scrollTo(0,1);
