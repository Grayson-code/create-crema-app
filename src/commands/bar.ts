// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Command } from '@sapphire/framework';
import type { Message } from 'discord.js';

/**
 * Here is an example for how commands work in Sapphire. For example this command replies to the command foo with bar
 * Read more at https://www.sapphirejs.dev/docs/Guide/getting-started/creating-a-basic-command
 */

export class PingCommand extends Command {
    public constructor(context: Command.Context, options: Command.Options) {
        super(context, {
            ...options,
            name: 'foo',
            aliases: ['bar'],
            description: 'the foo bar command!',
        });

        
    }

    public async messageRun(message: Message) {
        return message.reply('bar!')
    };
}