import Component from "../component";
import IMemory from "./iMemory";

export default class MediumMemory extends Component implements IMemory {
    
    private readonly memoryCapacity: string

    constructor() {
        super('MEDIUM_MEMORY')
        this.memoryCapacity = `16GB`
    }
    getMemoryCapacity(): string {
        return this.memoryCapacity
    }

    showMemoryInfo(): void {
        this.log(`MEMORY INFO: ${this.memoryCapacity}`)
    }
    
}