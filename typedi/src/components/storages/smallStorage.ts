import 'reflect-metadata'
import { Service } from 'typedi';
import Component from '../component'
import IStorage from './iStorage';

@Service()
export default class SmallStorage extends Component implements IStorage {

    private readonly storageSize: string

    constructor() {
        super('SMALL_STORAGE')
        this.storageSize = '16GB'
    }

    getStorageCapacity(): string {
        return this.storageSize
    }

    showStorageInfo(): void {
        this.log(`STORAGE INFO: ${this.storageSize}`)
    }

}