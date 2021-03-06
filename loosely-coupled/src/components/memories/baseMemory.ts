import Component from "../component";
import IMemory from "./iMemory";

export default abstract class BaseMemory extends Component implements IMemory {
    
    private readonly memoryCapacity: string

    constructor(memoryModel: string, memoryCapacity: string) {
        super(memoryModel)
        this.memoryCapacity = memoryCapacity
    }

    getMemoryCapacity(): string {
        return this.memoryCapacity
    }

    showMemoryInfo(): void {
        this.log(`MEMORY INFO: ${this.memoryCapacity}`)
    }
    
}