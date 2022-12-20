/*
 *  Copyright (c) 2018-present, Evgeny Nadymov
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
