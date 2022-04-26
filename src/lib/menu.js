import Glide from '@glidejs/glide';
import 'css/style.css';
import OBSWebSocket from 'obs-websocket-js';

const obs = new OBSWebSocket();
const scenes = [
    "Scene 1",
    "Scene 2",
    "Scene 3",
    "Scene 4",
    "Scene 5"
]

obs.connect({
    address: 'localhost:4444/'
});

obs.on('ConnectionOpened', () => {
    carousel.on(['mount.after'], () => {
        buttonActive(carousel.index);
        obs.send('SetCurrentScene', {
            'scene-name': scenes[carousel.index]
        })
    });
});

let carousel = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    focusAt: 2,
    gap: 50,
});

carousel.on('run.before', () => {
    let active = document.getElementById(`scene-item-${carousel.index}`);
    active.removeEventListener('click', handleClick);
})

carousel.on('swipe.end', () => {
    buttonActive(carousel.index);
})

carousel.mount();

function buttonActive(i) {
    let active = document.getElementById(`scene-item-${i}`);
    active.addEventListener('click', handleClick);
};

function handleClick() {
    let snapButton = document.querySelector('#snap-button');
    let clickEvent = new Event('click');
    snapButton.dispatchEvent(clickEvent);
}

let btns = document.getElementsByClassName('scene-item');
for (let i = 0; i < btns.length; i++) {
    let currIndex = btns[i].id.slice(-1);
    btns[i].addEventListener('click', () => {
        console.log('carousel : ' + carousel.index)
        console.log('index : ' + currIndex)
        if (carousel.index == currIndex) {
            handleClick();
        } else {
            carousel.go(`=${currIndex}`);
            obs.send('SetCurrentScene', {
                'scene-name': scenes[carousel.index]
            })
            setTimeout(() => {
                console.log('delay')
            }, 500)
        }

    })
}