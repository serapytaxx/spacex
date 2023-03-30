$(document).ready(function() {
  var playerPosition = 50; // позиция
  var gameWidth = $('#game-container').width(); // размер

  // мувмент
  $(document).keydown(function(e) {
    if (e.keyCode == 37) { // влево стрелочка
      playerPosition -= 5;
      if (playerPosition < 0) {
        playerPosition = 0;
      }
      $('#player').css('left', playerPosition + '%');
    }
  });

  // Move the player right
  $(document).keydown(function(e) {
    if (e.keyCode == 39) { // вправо стрелочка
      playerPosition += 5;
      if (playerPosition > 90) {
        playerPosition = 90;
      }
      $('#player').css('left', playerPosition + '%');
    }
  });
});
