import { Token } from "typedi";

export default interface IStorage {
    showStorageInfo(): void
    getStorageCapacity(): string
}

export const IStorageToken = new Token<IStorage>()