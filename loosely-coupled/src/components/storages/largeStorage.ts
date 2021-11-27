import Component from '../component'
import IStorage from './iStorage';

export default class LargeStorage extends Component implements IStorage {

    private readonly storageSize: string
    
    constructor() {
        super('LARGE_STORAGE')
        this.storageSize = '64GB'
    }

    getStorageCapacity(): string {
        return this.storageSize
    }

    showStorageInfo(): void {
        this.log(`STORAGE INFO: ${this.storageSize}`)
    }

}