import { Service } from "typedi";
import BaseSpeaker from "./baseSpeaker";
import { ISpeakerToken } from "./iSpeaker";

@Service({ id: ISpeakerToken })
export default class LoudSpeaker extends BaseSpeaker {
    
    constructor() {
        super('LOUD_SPEAKER', '110 dB')
    }

   
}