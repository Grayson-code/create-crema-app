// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Listener } from '@sapphire/framework';
import type { Client } from 'discord.js';

/**
 *  This is a example for a event file that will be used to do stuff like greeting users when they join the server.
 *  Read More at https://www.sapphirejs.dev/docs/Guide/listeners/creating-your-own-listeners#
 */

export class ReadyListener extends Listener {
  public constructor(context: Listener.Context, options: Listener.Options) {
    super(context, {
      ...options,
      once: true,
      event: 'ready'
    });

    
  }
  public run(client: Client) {
    const { username, id } = client.user!;
    this.container.logger.info(`Successfully logged in as ${username} (${id})`);
  }
}