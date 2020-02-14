(() => {
  const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removePlayingClass));

function removePlayingClass(event) {
    event.target.classList.remove('playing');
}

function playSound(event) {
  //this is the event object thst gets generated when you push any keys
  //debugger;

  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`),
        key = document.querySelector(`div[data-key="${event.keyCode}"]`);

  // the ! is a test for inequality -> if this expression is NOT true, then do something
  // aka a band operator
  if (!audio) { return }

  audio.currentTime = 0;
  audio.play();

  //find the div that matches the keyboard
  key.classList.add('playing');
}
  //listen for keyboard event
  window.addEventListener('keydown',playSound);

})();
