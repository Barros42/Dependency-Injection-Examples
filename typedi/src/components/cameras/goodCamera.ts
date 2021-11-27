import { Service } from "typedi";
import Component from "../component";
import ICamera, { ICameraToken } from "./iCamera";

@Service({ id: ICameraToken })
export default class GoodCamera extends Component implements ICamera {
    
    private readonly cameraQuality: string

    constructor() {
        super('GOOD_CAMERA')
        this.cameraQuality = '16MP'
    }

    takePhoto(): void {
        this.log('PHOTO TAKEN')
    }
    
    getCameraInfo(): string {
        return this.cameraQuality
    }

}