import 'reflect-metadata';
import { Inject, Service } from "typedi";
import ICamera, { ICameraToken } from "../components/cameras/iCamera";
import IMemory, { IMemoryToken } from "../components/memories/iMemory";
import ISpeaker, { ISpeakerToken } from "../components/speakers/iSpeaker";
import IStorage, { IStorageToken } from "../components/storages/iStorage";

@Service()
export default class Smartphone {

    constructor(
        @Inject(IStorageToken)
        private readonly storage: IStorage,

        @Inject(IMemoryToken)
        private readonly memory: IMemory,

        @Inject(ISpeakerToken)
        private readonly speaker: ISpeaker,

        @Inject(ICameraToken)
        private readonly camera: ICamera,
    ){}
    
    public takePhoto(): void {
        return this.camera.takePhoto()
    }

    public playMusic(): void {
        return this.speaker.playSound()
    }

    public showSmartphoneInfo(): void {
        console.log(`# SMARTPHONE INFO #\n`)
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