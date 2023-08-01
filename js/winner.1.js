'use strict';

// winner.1.js

const _graphic = (function() {
    let state = 0;
    let activeStep = 0;
    let currentStep = 0;
    let match_id = 0;
    let match_type;
    let red_alliance;
    let blue_alliance;

    (function() {
        window['update'] = (match_data) => update(match_data);
        window['play']   = play;
        window['next']   = next;
        window['stop']   = stop;
        window['remove'] = remove;
    });

    // match_data is gonna have the following:
    // who participated
    // the authors
    function updateRed() {
        const red_box = document.querySelector('.style-one .red-box');
        const [ship1_name, ship2_name, ship3_name] = red_box.querySelectorAll('.ship h1');
        const [ship1_author, ship2_author, ship3_author] = red_box.querySelectorAll('.ship p');

        ship1_name.textContent = red_alliance.ships[0].name;
        ship2_name.textContent = red_alliance.ships[1].name;
        ship3_name.textContent = red_alliance.ships[2].name;

        ship1_author.textContent = red_alliance.ships[0].author;
        ship2_author.textContent = red_alliance.ships[1].author;
        ship3_author.textContent = red_alliance.ships[2].author;
    }

    function updateBlue() {
        const blue_box = document.querySelector('.style-one .blue-box');
        const [ship1_name, ship2_name, ship3_name] = blue_box.querySelectorAll('.ship h1');
        const [ship1_author, ship2_author, ship3_author] = red_box.querySelectorAll('.ship p');

        ship1_name.textContent = blue_alliance.ships[0].name;
        ship2_name.textContent = blue_alliance.ships[1].name;
        ship3_name.textContent = blue_alliance.ships[2].name;

        ship1_author.textContent = blue_alliance.ships[0].author;
        ship2_author.textContent = blue_alliance.ships[1].author;
        ship3_author.textContent = blue_alliance.ships[2].author;
    }

    function update(match_data) {
        let parsed;

        try {
            parsed = JSON.parsed(match_data);
            if (!Object.keys(parsed).length) {
                throw new Error('Empty objects are Invalid!');
            }
            
            if (!parsed.red)
                handleWarning('No RED alliance specified!');
            if (!parsed.blue)
                handleWarning('No BLUE alliance specified!');

        } catch (e) {
            handleError(e);
            return;
        }

        if (parsed.red)
            red_alliance = parsed.red;
        if (parsed.blue)
            blue_alliance = parsed.blue;
        if (parsed.match_type)
            match_type = parsed.match_type;
        if (parsed.match_id)
            match_id = parsed.match_id;
        
        // state === 0 means graphic is being loaded
        if (state === 0) {
            try {
                updateRed();
                updateBlue();
            } catch (e) {
                handleError(e);
                return;
            }
        }
    }

    function play() {}
    function next() {}
    function stop() {}
    function remove() {}

    function handleError(e) {console.error(e)}
    function handleWarning(w) {console.log(w)}
});
