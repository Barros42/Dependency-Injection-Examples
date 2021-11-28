import { Service } from "typedi";
import BaseCamera from "./baseCamera";
import { ICameraToken } from "./iCamera";

@Service({ id: ICameraToken })
export default class AwesomeCamera extends BaseCamera {

    constructor() {
        super('AWESOME_CAMERA', '50MP')
    }

}