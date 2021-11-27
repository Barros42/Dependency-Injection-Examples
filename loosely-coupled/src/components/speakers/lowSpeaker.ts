import Component from "../component";
import ISpeaker from "./iSpeaker";

export default class LowSpeaker extends Component implements ISpeaker {
    
    private readonly speakerPower: string

    constructor() {
        super('LOW_SPEAKER')
        this.speakerPower = `70 dB`
    }

    playSound(): void {
       this.log('SOUND PLAYED')
    }
    getSpeakerInfo(): string {
       return this.speakerPower
    }
    
}