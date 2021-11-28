import { Service } from "typedi";
import BaseMemory from "./baseMemory";
import { IMemoryToken } from "./iMemory";

@Service({ id: IMemoryToken })
export default class LargeMemory extends BaseMemory {
    
    constructor() {
        super('LARGE_MEMORY', '32GB')
    }
   
}