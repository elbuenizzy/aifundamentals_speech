// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
export class SynthesisAudioMetadata {
    constructor(json) {
        this.privSynthesisAudioMetadata = JSON.parse(json);
    }
    static fromJSON(json) {
        return new SynthesisAudioMetadata(json);
    }
    get Metadata() {
        return this.privSynthesisAudioMetadata.Metadata;
    }
}

//# sourceMappingURL=SynthesisAudioMetadata.js.map
