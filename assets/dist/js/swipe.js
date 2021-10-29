"use strict";

$(function () {
  // prob a better way
  $('.swipeable .inner').each(function (e) {
    var snapper = new Snap({
      element: this,
      maxPosition: 100,
      minPosition: -100,
      disable: 'left'
    });
  });
  $('.delete').on('click', function (e) {
    $(this).parent().slideToggle(100);
  });
});