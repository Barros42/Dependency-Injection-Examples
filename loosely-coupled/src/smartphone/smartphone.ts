import IMemory from "../components/memories/iMemory";
import IStorage from "../components/storages/iStorage";

export default class Smartphone {

    private readonly storage: IStorage
    private readonly memory: IMemory

    constructor(
        storage: IStorage,
        memory: IMemory
    ) {
        this.storage = storage
        this.memory = memory
    }

    public showStorageInfo(): void {
        this.storage.showStorageInfo()
    }
    
    public showMemoryInfo(): void { 
        this.memory.showMemoryInfo()
    }

}