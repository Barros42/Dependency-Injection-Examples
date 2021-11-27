import Container from "typedi";
import { ICameraToken } from "./cameras/iCamera";
import NormalCamera from "./cameras/normalCamera";
import { IMemoryToken } from "./memories/iMemory";
import SmallMemory from "./memories/smallMemory";
import { ISpeakerToken } from "./speakers/iSpeaker";
import LowSpeaker from "./speakers/lowSpeaker";
import { IStorageToken } from "./storages/iStorage";
import SmallStorage from "./storages/smallStorage";

export default class Bootstrap {

    static run(): void {
        Container.set(ICameraToken, new NormalCamera())
        Container.set(IStorageToken, new SmallStorage())
        Container.set(IMemoryToken, new SmallMemory())
        Container.set(ISpeakerToken, new LowSpeaker())
    }

}