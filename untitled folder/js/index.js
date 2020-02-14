(() => {
  const playButtons = document.querySelectorAll('.playTrack'),
        pauseButtons = document.querySelectorAll('.pauseTrack'),
        rwButtons = document.querySelectorAll('.rwTrack'),
        audioElement = document.querySelector('#jukebox');

function loadTrack() {
  //debugger;
  let audioSource = `audio/${this.dataset.trackref}.mp3`;


  audioElement.src = audioSource;
  audioElement.load();

  playTrack();
}
function pauseTrack(){
    audioElement.pause();
}
function rwTrack(){
  audioElement.currentTime = 0;
}
function playTrack(){
  audioElement.play();
}

  playButtons.forEach(button => button.addEventListener("click", loadTrack));
  pauseButtons.forEach(button => button.addEventListener("click", pauseTrack));
  rwButtons.forEach(button => button.addEventListener("click", rwTrack));

})()
