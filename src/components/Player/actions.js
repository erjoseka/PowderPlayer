import alt from '../../alt'
import ipc from 'ipc';

class PlayerActions {
    constructor() {
        this.generateActions(
            'play',
            'pause',
            'playing',
            'uiShown',
            'position',
            'buffering',
            'time',

            'fullscreen',

            'metaUpdate',
            'wcjsInit',
            'close',
            'open'
        );
    }

    toggleFullscreen(state) {
        ipc.send('app:fullscreen', state);
        this.actions.fullscreen(state);
    }
}


export
default alt.createActions(PlayerActions);