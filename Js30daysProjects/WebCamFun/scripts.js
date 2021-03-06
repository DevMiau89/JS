/**
 * Created by Jacob on 2018-01-02.
 */
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(localMediaStream => {

        video.src = window.URL.createObjectURL(localMediaStream);
        video.play();
    })
    .catch(err => {
        console.log('OH NO!!!', err);
    });
}

function paintCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video,0 ,0 , width, height);
        let pixels = ctx.getImageData(0, 0, width, height);
        // pixels = rgbSplit(pixels);
        // ctx.globalAlpha = 0.8;
        pixels = greenScreen(pixels);

        console.log(pixels);
    }, 16);
}

function takePhoto() {
    snap.currentTime = 0;
    snap.play();

    //take the data out of the canvas
    const data = canvas.toDataURL('image/jpng');
    console.log(data);
    const link = document.createElement('a');
    console.log(link);
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome Man">`;
    const br = document.createElement('br');
    strip.insertBefore(br, strip.firstChild);
    strip.insertBefore(link, strip.firstChild);


}

function rgbSplit(pixels) {
  for(let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}


getVideo();


video.addEventListener('canplay', paintCanvas);


function LongestWord(sen) {

  // code goes here

  const strip = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  const arr = strip.split(' ');
  console.log(arr);
  // const longestWord = arr.reduce((longest, word) => {
  //     longest.length > word.lenght ? longest: word;
  // });

  for (let i=0; i < arr.length; i++) {
      // console.log(arr[i]);
      if (i == 0) {
          longest = arr[0] ;
      }
      if (longest.length < arr[i].length) {
         longest = arr[i];
      }
  }
  return longest;

}

// keep this function call here
console.log(LongestWord("fun&!! time"));
