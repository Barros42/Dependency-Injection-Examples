import { Service } from "typedi";
import BaseCamera from "./baseCamera";
import { ICameraToken } from "./iCamera";

@Service({ id: ICameraToken })
export default class NormalCamera extends BaseCamera {
    
    constructor() {
        super('NORMAL_CAMERA', '8MP')
    }

}