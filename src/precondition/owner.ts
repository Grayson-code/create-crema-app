// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Precondition } from '@sapphire/framework';
import type { Message } from 'discord.js';

/**
 * Preconditions are classes that will determine whether or not a command should be ran according to certain conditions.
 * Read More at https://www.sapphirejs.dev/docs/Guide/preconditions/what-are-preconditions# 
 */
export class OwnerOnlyPrecondition extends Precondition {
    public run(message: Message) {
        // return message.author.id === 'YOUR_ID'
        //   ? this.ok()
        //   : this.error({ message: 'Only the bot owner can use this command!' });
        return message.author.username === 'Bob' ? this.ok() : this.error({ message: 'Only Bob Can use this command!' });
    }
}

