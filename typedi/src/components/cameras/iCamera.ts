import { Token } from "typedi";

export default interface ICamera {
    takePhoto(): void
    getCameraInfo(): string
}

export const ICameraToken = new Token<ICamera>()