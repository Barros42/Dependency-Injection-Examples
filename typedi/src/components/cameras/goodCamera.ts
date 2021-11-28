import { Service } from "typedi";
import BaseCamera from "./baseCamera";
import { ICameraToken } from "./iCamera";

@Service({ id: ICameraToken })
export default class GoodCamera extends BaseCamera {
    
    constructor() {
        super('GOOD_CAMERA', '16MP')
    }

}