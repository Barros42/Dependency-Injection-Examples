import { Service } from "typedi";
import BaseSpeaker from "./baseSpeaker";
import { ISpeakerToken } from "./iSpeaker";

@Service({ id: ISpeakerToken })
export default class LowSpeaker extends BaseSpeaker {
    
    constructor() {
        super('LOW_SPEAKER', '70 dB')
    }

}