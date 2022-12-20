import EventEmitter from './EventEmitter';

class LibController extends EventEmitter {
    constructor() {
        super();
    }

    clientUpdate = update => {
        this.emit('clientUpdate', update);
    };

    logOut() {
        this.emit('loginOut', 'loginOut');
    }
}

const controller = new LibController();
window.controller = controller;
export default controller;
