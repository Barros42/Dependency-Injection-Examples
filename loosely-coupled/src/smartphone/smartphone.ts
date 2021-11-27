import ICamera from "../components/cameras/iCamera";
import IMemory from "../components/memories/iMemory";
import ISpeaker from "../components/speakers/iSpeaker";
import IStorage from "../components/storages/iStorage";

export default class Smartphone {

    private readonly model: string
    private readonly storage: IStorage
    private readonly memory: IMemory
    private readonly camera: ICamera    
    private readonly speaker: ISpeaker

    constructor(
        model: string,
        storage: IStorage,
        memory: IMemory,
        camera: ICamera,
        speaker: ISpeaker
    ) {
        this.model = model
        this.storage = storage
        this.memory = memory
        this.camera = camera
        this.speaker = speaker
    }

    public takePhoto(): void {
        return this.camera.takePhoto()
    }

    public playMusic(): void {
        return this.speaker.playSound()
    }

    public showSmartphoneInfo(): void {
        console.log(`# SMARTPHONE INFO #\n`)
        console.log(`Model: ${this.model}`)
        console.log(`Storage: ${this.storage.getStorageCapacity()}`)
        console.log(`Memory: ${this.memory.getMemoryCapacity()}`)
        console.log(`Camera: ${this.camera.getCameraInfo()}`)
        console.log(`Speaker: ${this.speaker.getSpeakerInfo()}`)
        console.log(`\n`)
    }

    public showStorageInfo(): void {
        return this.storage.showStorageInfo()
    }
    
    public showMemoryInfo(): void { 
        return this.memory.showMemoryInfo()
    }

}