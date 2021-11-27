import MotoCamera from "../components/motoCamera";
import MotoMemory from "../components/motoMemory";
import MotoSpeaker from "../components/motoSpeaker";
import MotoStorage from "../components/motoStorage";

export default class MotoG2 {

    private readonly camera: MotoCamera
    private readonly speaker: MotoSpeaker
    private readonly storage: MotoStorage
    private readonly memory: MotoMemory

    constructor() {
        this.camera = new MotoCamera()
        this.speaker = new MotoSpeaker()
        this.storage = new MotoStorage()
        this.memory = new MotoMemory()
    }

    public takeMotoPhoto(): void {
        return this.camera.takeMotoPhoto()
    }

    public recordMotoVideo(): void {
        return this.camera.recordMotoVideo()
    }

    public playMotoMusic(): void {
        return this.speaker.playMotoSound()
    }

    public showMotoStorageInfo(): void {
        return this.storage.showMotoInfo()
    }

    public showMotoMemoryInfo(): void {
        return this.memory.showMotoInfo()
    }

}