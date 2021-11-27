import Component from "../component";
import IMemory from "./iMemory";

export default class LargeMemory extends Component implements IMemory {
    
    private readonly memoryCapacity: string

    constructor() {
        super('LARGE_MEMORY')
        this.memoryCapacity = `32GB`
    }
    getMemoryCapacity(): string {
        return this.memoryCapacity
    }

    showMemoryInfo(): void {
        this.log(`MEMORY INFO: ${this.memoryCapacity}`)
    }
    
}