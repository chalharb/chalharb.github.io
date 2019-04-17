require('normalize.css/normalize.css');
require('./styles/index.scss');

import scrollSpy from 'simple-scrollspy'

window.onload = function () {
    const options = {
        sectionClass: '.main-section',     // Query selector to your sections
        menuActiveTarget: '.nav-link', // Query selector to your elements that will be added `active` class
        activeClass: 'is-active',
        offset: 100                     // Menu item will active before scroll to a matched section 100px
    }

    scrollSpy(document.getElementById('main-menu'), options)
};
