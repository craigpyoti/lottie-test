import lottie from 'lottie-web';
import ManyUses from './animations/OneYoti_ManyUsers.json';
import SafeDetails from './animations/SafeDetails.json';

const animation1 = lottie.loadAnimation({
    container: document.getElementById('animation-area'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: SafeDetails,
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
    animationData: ManyUses,
    autoloadSegments: true,
    rendererSettings: {
        progressiveLoading: false,
    },
});