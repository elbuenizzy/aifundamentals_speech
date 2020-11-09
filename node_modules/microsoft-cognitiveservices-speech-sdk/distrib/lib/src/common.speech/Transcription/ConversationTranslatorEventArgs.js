"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var Exports_1 = require("../../sdk/Exports");
var MuteAllEventArgs = /** @class */ (function (_super) {
    __extends(MuteAllEventArgs, _super);
    function MuteAllEventArgs(isMuted, sessionId) {
        var _this = _super.call(this, sessionId) || this;
        _this.privIsMuted = isMuted;
        return _this;
    }
    Object.defineProperty(MuteAllEventArgs.prototype, "isMuted", {
        get: function () {
            return this.privIsMuted;
        },
        enumerable: true,
        configurable: true
    });
    return MuteAllEventArgs;
}(Exports_1.SessionEventArgs));
exports.MuteAllEventArgs = MuteAllEventArgs;
// tslint:disable-next-line: max-classes-per-file
var LockRoomEventArgs = /** @class */ (function (_super) {
    __extends(LockRoomEventArgs, _super);
    function LockRoomEventArgs(isLocked, sessionId) {
        var _this = _super.call(this, sessionId) || this;
        _this.privIsLocked = isLocked;
        return _this;
    }
    Object.defineProperty(LockRoomEventArgs.prototype, "isMuted", {
        get: function () {
            return this.privIsLocked;
        },
        enumerable: true,
        configurable: true
    });
    return LockRoomEventArgs;
}(Exports_1.SessionEventArgs));
exports.LockRoomEventArgs = LockRoomEventArgs;
// tslint:disable-next-line: max-classes-per-file
var ParticipantEventArgs = /** @class */ (function (_super) {
    __extends(ParticipantEventArgs, _super);
    function ParticipantEventArgs(participant, sessionId) {
        var _this = _super.call(this, sessionId) || this;
        _this.privParticipant = participant;
        return _this;
    }
    Object.defineProperty(ParticipantEventArgs.prototype, "participant", {
        get: function () {
            return this.privParticipant;
        },
        enumerable: true,
        configurable: true
    });
    return ParticipantEventArgs;
}(Exports_1.SessionEventArgs));
exports.ParticipantEventArgs = ParticipantEventArgs;
// tslint:disable-next-line: max-classes-per-file
var ParticipantAttributeEventArgs = /** @class */ (function (_super) {
    __extends(ParticipantAttributeEventArgs, _super);
    function ParticipantAttributeEventArgs(participantId, key, value, sessionId) {
        var _this = _super.call(this, sessionId) || this;
        _this.privKey = key;
        _this.privValue = value;
        _this.privParticipantId = participantId;
        return _this;
    }
    Object.defineProperty(ParticipantAttributeEventArgs.prototype, "value", {
        get: function () {
            return this.privValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantAttributeEventArgs.prototype, "key", {
        get: function () {
            return this.privKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantAttributeEventArgs.prototype, "id", {
        get: function () {
            return this.privParticipantId;
        },
        enumerable: true,
        configurable: true
    });
    return ParticipantAttributeEventArgs;
}(Exports_1.SessionEventArgs));
exports.ParticipantAttributeEventArgs = ParticipantAttributeEventArgs;
// tslint:disable-next-line: max-classes-per-file
var ParticipantsListEventArgs = /** @class */ (function (_super) {
    __extends(ParticipantsListEventArgs, _super);
    function ParticipantsListEventArgs(conversationId, token, translateTo, profanityFilter, roomProfanityFilter, isRoomLocked, isMuteAll, participants, sessionId) {
        var _this = _super.call(this, sessionId) || this;
        _this.privRoomId = conversationId;
        _this.privSessionToken = token;
        _this.privTranslateTo = translateTo;
        _this.privProfanityFilter = profanityFilter;
        _this.privRoomProfanityFilter = roomProfanityFilter;
        _this.privIsRoomLocked = isRoomLocked;
        _this.privIsRoomLocked = isMuteAll;
        _this.privParticipants = participants;
        return _this;
    }
    Object.defineProperty(ParticipantsListEventArgs.prototype, "sessionToken", {
        get: function () {
            return this.privSessionToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListEventArgs.prototype, "conversationId", {
        get: function () {
            return this.privRoomId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListEventArgs.prototype, "translateTo", {
        get: function () {
            return this.privTranslateTo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListEventArgs.prototype, "profanityFilter", {
        get: function () {
            return this.privProfanityFilter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListEventArgs.prototype, "roomProfanityFilter", {
        get: function () {
            return this.privRoomProfanityFilter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListEventArgs.prototype, "isRoomLocked", {
        get: function () {
            return this.privIsRoomLocked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListEventArgs.prototype, "isMuteAll", {
        get: function () {
            return this.privIsMuteAll;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticipantsListEventArgs.prototype, "participants", {
        get: function () {
            return this.privParticipants;
        },
        enumerable: true,
        configurable: true
    });
    return ParticipantsListEventArgs;
}(Exports_1.SessionEventArgs));
exports.ParticipantsListEventArgs = ParticipantsListEventArgs;
// tslint:disable-next-line: max-classes-per-file
var ConversationReceivedTranslationEventArgs = /** @class */ (function () {
    function ConversationReceivedTranslationEventArgs(command, payload, sessionId) {
        this.privPayload = payload;
        this.privCommand = command;
        this.privSessionId = sessionId;
    }
    Object.defineProperty(ConversationReceivedTranslationEventArgs.prototype, "payload", {
        get: function () {
            return this.privPayload;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConversationReceivedTranslationEventArgs.prototype, "command", {
        get: function () {
            return this.privCommand;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConversationReceivedTranslationEventArgs.prototype, "sessionId", {
        get: function () {
            return this.privSessionId;
        },
        enumerable: true,
        configurable: true
    });
    return ConversationReceivedTranslationEventArgs;
}());
exports.ConversationReceivedTranslationEventArgs = ConversationReceivedTranslationEventArgs;

//# sourceMappingURL=ConversationTranslatorEventArgs.js.map
