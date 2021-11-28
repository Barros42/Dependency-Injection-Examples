import { Service } from "typedi";
import BaseSpeaker from "./baseSpeaker";
import { ISpeakerToken } from "./iSpeaker";

@Service({ id: ISpeakerToken })
export default class MediumSpeaker extends BaseSpeaker {
    
    constructor() {
        super('MEDIUM_SPEAKER', '90 dB')
    }
    
}