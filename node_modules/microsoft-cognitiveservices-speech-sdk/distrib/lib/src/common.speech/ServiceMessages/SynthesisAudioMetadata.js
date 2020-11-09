"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var SynthesisAudioMetadata = /** @class */ (function () {
    function SynthesisAudioMetadata(json) {
        this.privSynthesisAudioMetadata = JSON.parse(json);
    }
    SynthesisAudioMetadata.fromJSON = function (json) {
        return new SynthesisAudioMetadata(json);
    };
    Object.defineProperty(SynthesisAudioMetadata.prototype, "Metadata", {
        get: function () {
            return this.privSynthesisAudioMetadata.Metadata;
        },
        enumerable: true,
        configurable: true
    });
    return SynthesisAudioMetadata;
}());
exports.SynthesisAudioMetadata = SynthesisAudioMetadata;

//# sourceMappingURL=SynthesisAudioMetadata.js.map
