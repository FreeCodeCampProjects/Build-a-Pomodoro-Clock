/* Configuration object. Here we centralise important app properties.
 *********************************************************************/

config = {
    // Classes from "animate.css" library.
    ANIMATION_CLASSES: {
        ROTATE_IN: 'animated rotateIn',
        HEADSHAKE: 'animated headShake',
        JELLO: 'animated jello',
        PULSE: 'animated pulse'
    },
    // Image sources (linked to my Dropbox).
    IMG: {
        AJAX_LOADER: 'https://dl.dropboxusercontent.com/u/7797721/FreeCodeCamp/Pomodoro%20Clock/img/ajax-loader-green.gif'
    },
    // Styles for "session" and "break" modes.
    STYLES: {
        SESSION: {
            BKG: '#0E3E22',
            BORDER: '4px solid #00FF00'
        },
        BREAK: {
            BKG: '#D35400',
            BORDER: '4px solid #F1C40F'
        },
        TEXT_CONTENT: {
            UNPAUSED: {
                MODE: {
                    COLOR: '#FFF',
                    FONT_SIZE: '26px'
                },
                COUNTDOWN: {
                    COLOR: '#00FF00'
                }
            },
            PAUSED: {
                MODE: {
                    COLOR: '#FFF',
                    FONT_SIZE: '18px'
                },
                COUNTDOWN: {
                    COLOR: '#FFF'
                }
            }
        }  
    },
    TEXT: {
        BREAK: 'break',
        PAUSED: '[paused]',
        SESSION: 'session',
        DIVIDER: ' : ',
        PERCENT: '%'
    },
    // Time increments used for "setInterval" functions.
    TIME_INTERVAL: {
        UPDATE_FORMAT: 1000,
        UPDATE_ANIMATION: 1000,
        UPDATE_VALUES: 1000
    }
};