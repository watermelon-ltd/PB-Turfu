import Glide from '@glidejs/glide';
import 'css/style.css';

let observer = new MutationObserver( (evt) => {
    console.log(evt);
})

let carousel = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    focusAt: 2,
    gap: 50,
});

carousel.on(['mount.after', 'run.after'], () => {
    buttonInactive();
    buttonActive(carousel.index);
    // resizeInactive();
});

carousel.mount();



function buttonActive(i) {
    let active = document.querySelector('.glide__slide--active');
    active.addEventListener('click', handleClick);
};

function buttonInactive() {
    let inactive = document.getElementsByClassName('glide__slide');
    for (let el of inactive) {
        el.removeEventListener('click', handleClick);
    }
}

function handleClick(evt) {
    console.log(evt)
}
