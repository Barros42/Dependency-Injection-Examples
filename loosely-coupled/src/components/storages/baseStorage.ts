import Component from "../component";
import IStorage from "./iStorage";

export default abstract class BaseStorage extends Component implements IStorage {
  
    private readonly storageSize: string
  
    constructor(storageModel: string, storageSize: string) {
        super(storageModel)
        this.storageSize = storageSize
    }

    getStorageCapacity(): string {
        return this.storageSize
    }

    showStorageInfo(): void {
        this.log(`STORAGE INFO: ${this.storageSize}`)
    }
    
}