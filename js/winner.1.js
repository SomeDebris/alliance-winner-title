'use strict';

// winner.1.js

const _graphic = (function() {
    let state = 0;
    let activeStep = 0;
    let currentStep = 0;
    let data = [];
    let style;

    (function() {
        window['update'] = (match_data) => update(match_data);
        window['play']   = play;
        window['next']   = next;
        window['stop']   = stop;
        window['remove'] = remove;
    });

    function update(match_data) {}
    function play() {}
    function next() {}
    function stop() {}
    function remove() {}

    function handleError(e) {console.error(e)}
    function handleWarning(w) {console.log(w)}
});
