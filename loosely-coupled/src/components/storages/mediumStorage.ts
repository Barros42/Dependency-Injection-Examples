import Component from '../component'
import IStorage from './iStorage';

export default class MediumStorage extends Component implements IStorage {

    private readonly storageSize: string

    constructor() {
        super('MEDIUM_STORAGE')
        this.storageSize = '32GB'
    }

    getStorageCapacity(): string {
        return this.storageSize
    }

    showStorageInfo(): void {
        this.log(`STORAGE INFO: ${this.storageSize}`)
    }

}