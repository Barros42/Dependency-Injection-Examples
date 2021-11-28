import Component from "../component";
import ISpeaker from "./iSpeaker";

export default abstract class BaseSpeaker extends Component implements ISpeaker {

    private readonly speakerPower: string

    constructor(speakerModel: string, speakerPower: string) {
        super(speakerModel)
        this.speakerPower = speakerPower
    }

    playSound(): void {
        this.log('SOUND PLAYED')
    }
     getSpeakerInfo(): string {
        return this.speakerPower
    }
  
    
}