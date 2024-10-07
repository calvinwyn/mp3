var sound = new Howl({
    src: ['example.mp3']
  });
  
  document.getElementById('play').addEventListener('click', function () {
    sound.play();
  });
  
  document.getElementById('pause').addEventListener('click', function () {
    sound.pause();
  });
  