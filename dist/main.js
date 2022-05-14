"use strict";
// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const framework_1 = require("@sapphire/framework");
require("dotenv/config");
/**
 * This is the main file for the bot.
 * The Bot comes with pre defined intents and partials that is commonly used, a prefix for the legacy commands
 * and a precense object that makes it easier for you to set the bot presence.
 */
class Client extends framework_1.SapphireClient {
    constructor() {
        super({
            intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'DIRECT_MESSAGES', 'GUILD_MESSAGE_REACTIONS'],
            partials: ["CHANNEL", "MESSAGE", "GUILD_MEMBER"],
            defaultPrefix: "!",
            presence: {
                status: "idle",
                activities: [{
                        name: 'Made With Sapphire',
                        type: 'COMPETING',
                    }]
            },
        });
    }
    login(token) {
        return super.login(token);
    }
    ;
}
const client = new Client();
client.login(process.env.token);
