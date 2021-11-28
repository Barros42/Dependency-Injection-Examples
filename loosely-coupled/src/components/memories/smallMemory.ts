import BaseMemory from "./baseMemory";

export default class SmallMemory extends BaseMemory {
    
    constructor() {
        super('SMALL_MEMORY', '2GB')
    }

}