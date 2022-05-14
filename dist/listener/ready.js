"use strict";
// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadyListener = void 0;
const framework_1 = require("@sapphire/framework");
/**
 *  This is a example for a event file that will be used to do stuff like greeting users when they join the server.
 *  Read More at https://www.sapphirejs.dev/docs/Guide/listeners/creating-your-own-listeners#
 */
class ReadyListener extends framework_1.Listener {
    constructor(context, options) {
        super(context, Object.assign(Object.assign({}, options), { once: true, event: 'ready' }));
    }
    run(client) {
        const { username, id } = client.user;
        this.container.logger.info(`Successfully logged in as ${username} (${id})`);
    }
}
exports.ReadyListener = ReadyListener;
