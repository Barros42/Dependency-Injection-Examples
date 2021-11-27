import { Token } from "typedi";

export default interface ISpeaker {
    playSound(): void
    getSpeakerInfo(): string
}

export const ISpeakerToken = new Token<ISpeaker>()