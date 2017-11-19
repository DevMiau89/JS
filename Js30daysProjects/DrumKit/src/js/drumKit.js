/**
 * Created by Jacob on 2017-11-18.
 */
function playSound(e) {
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')

}
function removeTransition(e) {
    console.log("dziala");
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

$( document ).ready(function() {
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
});
