let snapButton = document.querySelector('#snap-button');
let clearButton = document.querySelector('#clear-button');
let printButton = document.querySelector('#print-button');
let capturePreview = document.querySelector('.capture-preview');
let captureStream = document.querySelector('#capture-stream');
let captureCanvas = document.querySelector('#capture-canvas')
let capturePhoto = document.querySelector('#capture-photo');
let cameraMenu = document.querySelector('.active-menu');
let snapMenu = document.querySelector('.inactive-menu');
let cameraTimer = document.querySelector('#camera-timer');
let width = 0;
let height = 0;
let audio = new Audio('./assets/Audio/camera-shutter.mp3');

const displayMediaOptions = { video: true, audio: false };

async function getStream() {
    try {
        stream = await navigator.mediaDevices.getDisplayMedia();
    } catch (err) {
        console.error(err);
    }

    captureStream.srcObject = stream;
    captureStream.onloadedmetadata = (evt) => { 
        captureStream.play();
        width = captureStream.videoWidth;
        height = captureStream.videoHeight;
    };

    capturePreview.hidden = true;
    snapMenu.hidden = true;
    cameraTimer.hidden = true;
};

function takeSnap() {
    let context = captureCanvas.getContext('2d');
    captureCanvas.width = width;
    captureCanvas.height = height;

    captureStream.pause();
    context.drawImage(captureStream, 0, 0);

    let data = captureCanvas.toDataURL('capture/jpg');
    capturePhoto.src = data;

    capturePreview.hidden = false;
    snapMenu.hidden = false;
};

function clearSnap() {
    cameraMenu.hidden = false;
    snapButton.hidden = false;
    capturePreview.hidden = true;
    snapMenu.hidden = true;
    captureStream.play();
}

function countdown() {
    let timer = 5;
    cameraTimer.innerHTML = timer;
    cameraMenu.hidden = true;
    cameraTimer.hidden = false;

    let countdown = setInterval(() => {
        if (timer <= 0) {
            clearInterval(countdown);
            takeSnap();
            audio.play();
        } else if (timer <= 0.5) {
            cameraTimer.hidden = true;
            snapButton.hidden = true;
            cameraTimer.hidden = true;
        } else {
            cameraTimer.innerHTML = Math.round(timer);
        }

        timer -= 0.5;
    }, 500);
}

function print() {
    window.print();
}

snapButton.addEventListener('click', countdown);

clearButton.addEventListener('click', clearSnap);

printButton.addEventListener('click', print);

getStream();

