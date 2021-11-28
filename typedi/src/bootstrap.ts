import Container from "typedi";
import AwesomeCamera from "./components/cameras/awesomeCamera";
import { ICameraToken } from "./components/cameras/iCamera";
import NormalCamera from "./components/cameras/normalCamera";
import { IMemoryToken } from "./components/memories/iMemory";
import SmallMemory from "./components/memories/smallMemory";
import { ISpeakerToken } from "./components/speakers/iSpeaker";
import LowSpeaker from "./components/speakers/lowSpeaker";
import { IStorageToken } from "./components/storages/iStorage";
import SmallStorage from "./components/storages/smallStorage";

export default class Bootstrap {

    static run(): void {
        Container.set(ICameraToken, new AwesomeCamera())
        Container.set(IStorageToken, new SmallStorage())
        Container.set(IMemoryToken, new SmallMemory())
        Container.set(ISpeakerToken, new LowSpeaker())
    }

}