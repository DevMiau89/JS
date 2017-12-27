/**
 * Created by Jacob on 2017-12-26.
 */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressCompleted = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const reload = player.querySelector('.restart');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');


function togglePlay() {
    if(video.paused){
      video.play();
      toggle.textContent='||';
    } else {
      video.pause();
      toggle.textContent='►';
    }
}

function restart() {
    video.currentTime = 0;
}

function skip() {
    console.log(this.dataset.skip);
    console.log(this.attributes[0].value);
    video.currentTime += parseFloat(this.attributes[0].value);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration)*100;
    progressCompleted.style.flexBasis = `${percent}%`;
}

function rangeUpdate(){
    console.log(this.value);
    video[this.name] = this.value;

}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

/* Events */
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
reload.addEventListener('click', restart);
skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', rangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

