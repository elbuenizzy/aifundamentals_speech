"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var CommandResponsePayload = /** @class */ (function () {
    function CommandResponsePayload(json) {
        this.privCommandResponse = JSON.parse(json);
    }
    CommandResponsePayload.fromJSON = function (json) {
        return new CommandResponsePayload(json);
    };
    Object.defineProperty(CommandResponsePayload.prototype, "type", {
        get: function () {
            return this.privCommandResponse.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandResponsePayload.prototype, "command", {
        get: function () {
            return this.privCommandResponse.command;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandResponsePayload.prototype, "id", {
        get: function () {
            return this.privCommandResponse.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandResponsePayload.prototype, "nickname", {
        get: function () {
            return this.privCommandResponse.nickname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandResponsePayload.prototype, "participantId", {
        get: function () {
            return this.privCommandResponse.participantId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandResponsePayload.prototype, "roomid", {
        get: function () {
            return this.privCommandResponse.roomid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandResponsePayload.prototype, "value", {
        get: function () {
            return this.privCommandResponse.value;
        },
        enumerable: true,
        configurable: true
    });
    return CommandResponsePayload;
}());
exports.CommandResponsePayload = CommandResponsePayload;

//# sourceMappingURL=CommandResponsePayload.js.map
