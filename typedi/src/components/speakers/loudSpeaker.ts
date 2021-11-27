import { Service } from "typedi";
import Component from "../component";
import ISpeaker, { ISpeakerToken } from "./iSpeaker";

@Service({ id: ISpeakerToken })
export default class LoudSpeaker extends Component implements ISpeaker {
    
    private readonly speakerPower: string

    constructor() {
        super('LOUD_SPEAKER')
        this.speakerPower = `110 dB`
    }

    playSound(): void {
       this.log('SOUND PLAYED')
    }
    getSpeakerInfo(): string {
       return this.speakerPower
    }
    
}