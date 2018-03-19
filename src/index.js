import lottie from 'lottie-web';
import ManyUses_Test7 from './animations/ManyUsers_Test7.json';
import SafeDetails_Test7 from './animations/SafeDetails_07.json';

const animation1 = lottie.loadAnimation({
    container: document.getElementById('animation-area'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: SafeDetails_Test7,
    autoloadSegments: true,
    rendererSettings: {
        progressiveLoading: false,
    },
});
const animation2 = lottie.loadAnimation({
    container: document.getElementById('animation-area-2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: ManyUses_Test7,
    autoloadSegments: true,
    rendererSettings: {
        progressiveLoading: false,
    },
});