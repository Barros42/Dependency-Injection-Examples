import { Token } from "typedi";

export default interface IMemory {
    showMemoryInfo(): void
    getMemoryCapacity(): string
}

export const IMemoryToken = new Token<IMemory>()