let snapButton = document.querySelector('#snap-button');
let clearButton = document.querySelector('#clear-button');
let captureStream = document.querySelector('#capture-stream');
let captureCanvas = document.querySelector('#capture-canvas')
let capturePhoto = document.querySelector('#capture-photo');
let width = 0;
let height = 0;

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

    captureCanvas.hidden = true;
    clearButton.hidden = true;
};

function takeSnap() {
    let context = captureCanvas.getContext('2d');
    captureCanvas.width = width;
    captureCanvas.height = height;

    context.drawImage(captureStream, 0, 0);

    let data = captureCanvas.toDataURL('capture/jpg');
    capturePhoto.src = data;

    captureCanvas.hidden = false;
    clearButton.hidden = false;
};

function clearSnap() {
    snapButton.hidden = false;
    captureCanvas.hidden = true;
    clearButton.hidden = true;
}

function countdown() {
    let timer = 3;

    let countdown = setInterval(() => {
        if (timer <= 0) {
            clearInterval(countdown);
            takeSnap();
        } else if (timer <= 0.5) {
            snapButton.hidden = true;
        } else {
            console.log(timer)
        }
        timer -= 0.5;
    }, 500);
}

snapButton.addEventListener('click', () => {
    countdown();   
});

clearButton.addEventListener('click', () => {
    clearSnap();
})

getStream();

