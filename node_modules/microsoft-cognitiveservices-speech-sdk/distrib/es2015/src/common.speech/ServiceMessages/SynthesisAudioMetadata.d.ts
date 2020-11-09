export interface ISynthesisMetadata {
    Type: string;
    Data: {
        Offset: number;
        text: {
            Text: string;
            Length: number;
        };
    };
}
export interface ISynthesisAudioMetadata {
    Metadata: ISynthesisMetadata[];
}
export declare class SynthesisAudioMetadata implements ISynthesisAudioMetadata {
    private privSynthesisAudioMetadata;
    private constructor();
    static fromJSON(json: string): SynthesisAudioMetadata;
    get Metadata(): ISynthesisMetadata[];
}
