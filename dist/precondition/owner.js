"use strict";
// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerOnlyPrecondition = void 0;
const framework_1 = require("@sapphire/framework");
/**
 * Preconditions are classes that will determine whether or not a command should be ran according to certain conditions.
 * Read More at https://www.sapphirejs.dev/docs/Guide/preconditions/what-are-preconditions#
 */
class OwnerOnlyPrecondition extends framework_1.Precondition {
    run(message) {
        // return message.author.id === 'YOUR_ID'
        //   ? this.ok()
        //   : this.error({ message: 'Only the bot owner can use this command!' });
        return message.author.username === 'Bob' ? this.ok() : this.error({ message: 'Only Bob Can use this command!' });
    }
}
exports.OwnerOnlyPrecondition = OwnerOnlyPrecondition;
