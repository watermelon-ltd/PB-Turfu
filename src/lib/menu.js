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
    carousel.on(['mount.after', 'run.after'], () => {
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

carousel.on('build.after', () => {
    buttonActive(0);
})

carousel.mount();



function buttonActive(i) {
    let active = document.querySelector('.glide__slide--active');
    active.addEventListener('click', handleClick);
};

function handleClick() {
    let snapButton = document.querySelector('#snap-button');
    let clickEvent = new Event('click');
    snapButton.dispatchEvent(clickEvent);
}
