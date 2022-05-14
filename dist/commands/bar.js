"use strict";
// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingCommand = void 0;
const framework_1 = require("@sapphire/framework");
/**
 * Here is an example for how commands work in Sapphire. For example this command replies to the command foo with bar
 * Read more at https://www.sapphirejs.dev/docs/Guide/getting-started/creating-a-basic-command
 */
class PingCommand extends framework_1.Command {
    constructor(context, options) {
        super(context, Object.assign(Object.assign({}, options), { name: 'foo', aliases: ['bar'], description: 'the foo bar command!' }));
    }
    messageRun(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return message.reply('bar!');
        });
    }
    ;
}
exports.PingCommand = PingCommand;
