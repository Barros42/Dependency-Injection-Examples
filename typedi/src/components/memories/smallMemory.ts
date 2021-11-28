import { Service } from "typedi";
import BaseMemory from "./baseMemory";
import { IMemoryToken } from "./iMemory";

@Service({ id: IMemoryToken })
export default class SmallMemory extends BaseMemory {
    
    constructor() {
        super('SMALL_MEMORY', '2GB')
    }

}