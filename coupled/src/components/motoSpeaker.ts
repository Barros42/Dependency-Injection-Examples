import MotoComponent from "./motoComponent";

export default class MotoSpeaker extends MotoComponent {

    constructor() {
        super('MOTO_SPEAKER_X1')
    }

    public playMotoSound() {
        this.log('MUSIC PLAYED')
    }

}