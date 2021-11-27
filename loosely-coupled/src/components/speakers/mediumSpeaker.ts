import Component from "../component";
import ISpeaker from "./iSpeaker";

export default class MediumSpeaker extends Component implements ISpeaker {
    
    private readonly speakerPower: string

    constructor() {
        super('MEDIUM_SPEAKER')
        this.speakerPower = `90 dB`
    }

    playSound(): void {
       this.log('SOUND PLAYED')
    }
    getSpeakerInfo(): string {
       return this.speakerPower
    }
    
}