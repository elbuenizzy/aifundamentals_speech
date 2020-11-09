"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var ParticipantsListPayloadResponse = /** @class */ (function () {
    function ParticipantsListPayloadResponse(json) {
        this.privParticipantsPayloadResponse = JSON.parse(json);
    }
    ParticipantsListPayloadResponse.fromJSON = function (json) {
        return new ParticipantsListPayloadResponse(json);
    };
    Object.defineProperty(ParticipantsListPayloadResponse.prototype, "roomid", {
        get: function () {
            return this.privParticipantsPayloadResponse.roomid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListPayloadResponse.prototype, "id", {
        get: function () {
            return this.privParticipantsPayloadResponse.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListPayloadResponse.prototype, "command", {
        get: function () {
            return this.privParticipantsPayloadResponse.command;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListPayloadResponse.prototype, "participants", {
        get: function () {
            return this.privParticipantsPayloadResponse.participants;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListPayloadResponse.prototype, "token", {
        get: function () {
            return this.privParticipantsPayloadResponse.token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListPayloadResponse.prototype, "translateTo", {
        get: function () {
            return this.privParticipantsPayloadResponse.translateTo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListPayloadResponse.prototype, "profanityFilter", {
        get: function () {
            return this.privParticipantsPayloadResponse.profanityFilter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListPayloadResponse.prototype, "roomProfanityFilter", {
        get: function () {
            return this.privParticipantsPayloadResponse.roomProfanityFilter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListPayloadResponse.prototype, "roomLocked", {
        get: function () {
            return this.privParticipantsPayloadResponse.roomLocked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListPayloadResponse.prototype, "muteAll", {
        get: function () {
            return this.privParticipantsPayloadResponse.muteAll;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListPayloadResponse.prototype, "type", {
        get: function () {
            return this.privParticipantsPayloadResponse.type;
        },
        enumerable: true,
        configurable: true
    });
    return ParticipantsListPayloadResponse;
}());
exports.ParticipantsListPayloadResponse = ParticipantsListPayloadResponse;
// tslint:disable-next-line: max-classes-per-file
var ParticipantPayloadResponse = /** @class */ (function () {
    function ParticipantPayloadResponse(json) {
        this.privParticipantPayloadResponse = JSON.parse(json);
    }
    ParticipantPayloadResponse.fromJSON = function (json) {
        return new ParticipantPayloadResponse(json);
    };
    Object.defineProperty(ParticipantPayloadResponse.prototype, "nickname", {
        get: function () {
            return this.privParticipantPayloadResponse.nickname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantPayloadResponse.prototype, "locale", {
        get: function () {
            return this.privParticipantPayloadResponse.locale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantPayloadResponse.prototype, "usetts", {
        get: function () {
            return this.privParticipantPayloadResponse.usetts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantPayloadResponse.prototype, "ismuted", {
        get: function () {
            return this.privParticipantPayloadResponse.ismuted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantPayloadResponse.prototype, "ishost", {
        get: function () {
            return this.privParticipantPayloadResponse.ishost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantPayloadResponse.prototype, "participantId", {
        get: function () {
            return this.privParticipantPayloadResponse.participantId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantPayloadResponse.prototype, "avatar", {
        get: function () {
            return this.privParticipantPayloadResponse.avatar;
        },
        enumerable: true,
        configurable: true
    });
    return ParticipantPayloadResponse;
}());
exports.ParticipantPayloadResponse = ParticipantPayloadResponse;

//# sourceMappingURL=ParticipantResponsePayload.js.map
