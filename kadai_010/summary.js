$(function () {
  //文字色変更
  $('#change-color').on('click', function() {
    $('#target').css('color', '#4169e1');
  });

  //内容変更
  $('#change-text').on('click', function() {
    $('#target').text("Hello!");
  });

  //アニメーション・フェードアウト
  $('#fade-out').on('click', function () {
    $('#target').fadeOut(1000);
  });

  //アニメーション・フェードイン
  $('#fade-in').on('click', function () {
    $('#target').fadeIn(1000);
  });

});