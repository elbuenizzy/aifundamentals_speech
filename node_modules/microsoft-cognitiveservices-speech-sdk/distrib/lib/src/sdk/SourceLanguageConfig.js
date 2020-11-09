"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Contracts_1 = require("./Contracts");
/**
 * Source Language configuration.
 * @class SourceLanguageConfig
 */
var SourceLanguageConfig = /** @class */ (function () {
    function SourceLanguageConfig(language, endpointId) {
        Contracts_1.Contracts.throwIfNullOrUndefined(language, "language");
        this.privLanguage = language;
        this.privEndpointId = endpointId;
    }
    /**
     * @member SourceLanguageConfig.fromLanguage
     * @function
     * @public
     * @param {string} language language (eg. "en-US") value of config.
     * @param {string?} endpointId endpointId of model bound to given language of config.
     * @return {SourceLanguageConfig} Instance of SourceLanguageConfig
     * @summary Creates an instance of the SourceLanguageConfig with the given language and optional endpointId.
     * Added in version 1.13.0.
     */
    SourceLanguageConfig.fromLanguage = function (language, endpointId) {
        return new SourceLanguageConfig(language, endpointId);
    };
    Object.defineProperty(SourceLanguageConfig.prototype, "language", {
        get: function () {
            return this.privLanguage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SourceLanguageConfig.prototype, "endpointId", {
        get: function () {
            return this.privEndpointId;
        },
        enumerable: true,
        configurable: true
    });
    return SourceLanguageConfig;
}());
exports.SourceLanguageConfig = SourceLanguageConfig;

//# sourceMappingURL=SourceLanguageConfig.js.map
