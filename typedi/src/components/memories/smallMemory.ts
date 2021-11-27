import { Service } from "typedi";
import Component from "../component";
import IMemory, { IMemoryToken } from "./iMemory";

@Service({ id: IMemoryToken })
export default class SmallMemory extends Component implements IMemory {
    
    private readonly memoryCapacity: string

    constructor() {
        super('SMALL_MEMORY')
        this.memoryCapacity = `2GB`
    }
    getMemoryCapacity(): string {
        return this.memoryCapacity
    }

    showMemoryInfo(): void {
        this.log(`MEMORY INFO: ${this.memoryCapacity}`)
    }
    
}