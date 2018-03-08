import lottie from 'lottie-web';
import data from './data.json';
import animation0 from './animations/00.json';
import animation1 from './animations/01.json';
import animation2 from './animations/02.json';
import animation3 from './animations/03.json';
import animation4 from './animations/04.json';
import animation5 from './animations/05.json';
import animation6 from './animations/06.json';
import animation7 from './animations/07.json';
import animation8 from './animations/08.json';
import animation9 from './animations/09.json';
import animation10 from './animations/10.json';
import SafeDetails from './animations/SafeDetails.json';
import ManyUses from './animations/ManyUses.json';
import ManyUsesSpin from './animations/ManyUsesSpin.json';

const container = document.getElementById('animation-area');
const animation = lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: ManyUses,
    autoloadSegments: true,
    rendererSettings: {
        progressiveLoading: false,
    },
});