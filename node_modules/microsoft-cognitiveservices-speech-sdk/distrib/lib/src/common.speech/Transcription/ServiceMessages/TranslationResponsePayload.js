"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var SpeechResponsePayload = /** @class */ (function () {
    function SpeechResponsePayload(json) {
        this.privSpeechResponse = JSON.parse(json);
    }
    SpeechResponsePayload.fromJSON = function (json) {
        return new SpeechResponsePayload(json);
    };
    Object.defineProperty(SpeechResponsePayload.prototype, "recognition", {
        get: function () {
            return this.privSpeechResponse.recognition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechResponsePayload.prototype, "translations", {
        get: function () {
            return this.privSpeechResponse.translations;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechResponsePayload.prototype, "id", {
        get: function () {
            return this.privSpeechResponse.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechResponsePayload.prototype, "language", {
        get: function () {
            return this.privSpeechResponse.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechResponsePayload.prototype, "nickname", {
        get: function () {
            return this.privSpeechResponse.nickname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechResponsePayload.prototype, "participantId", {
        get: function () {
            return this.privSpeechResponse.participantId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechResponsePayload.prototype, "roomid", {
        get: function () {
            return this.privSpeechResponse.roomid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechResponsePayload.prototype, "timestamp", {
        get: function () {
            return this.privSpeechResponse.timestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechResponsePayload.prototype, "type", {
        get: function () {
            return this.privSpeechResponse.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechResponsePayload.prototype, "isFinal", {
        get: function () {
            return this.privSpeechResponse.type === "final";
        },
        enumerable: true,
        configurable: true
    });
    return SpeechResponsePayload;
}());
exports.SpeechResponsePayload = SpeechResponsePayload;
// tslint:disable-next-line: max-classes-per-file
var TextResponsePayload = /** @class */ (function () {
    function TextResponsePayload(json) {
        this.privTextResponse = JSON.parse(json);
    }
    TextResponsePayload.fromJSON = function (json) {
        return new TextResponsePayload(json);
    };
    Object.defineProperty(TextResponsePayload.prototype, "originalText", {
        get: function () {
            return this.privTextResponse.originalText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextResponsePayload.prototype, "translations", {
        get: function () {
            return this.privTextResponse.translations;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextResponsePayload.prototype, "id", {
        get: function () {
            return this.privTextResponse.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextResponsePayload.prototype, "language", {
        get: function () {
            return this.privTextResponse.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextResponsePayload.prototype, "nickname", {
        get: function () {
            return this.privTextResponse.nickname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextResponsePayload.prototype, "participantId", {
        get: function () {
            return this.privTextResponse.participantId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextResponsePayload.prototype, "roomid", {
        get: function () {
            return this.privTextResponse.roomid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextResponsePayload.prototype, "timestamp", {
        get: function () {
            return this.privTextResponse.timestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextResponsePayload.prototype, "type", {
        get: function () {
            return this.privTextResponse.type;
        },
        enumerable: true,
        configurable: true
    });
    return TextResponsePayload;
}());
exports.TextResponsePayload = TextResponsePayload;

//# sourceMappingURL=TranslationResponsePayload.js.map
