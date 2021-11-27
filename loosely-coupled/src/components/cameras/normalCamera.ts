import Component from "../component";
import ICamera from "./iCamera";

export default class NormalCamera extends Component implements ICamera {
    
    private readonly cameraQuality: string

    constructor() {
        super('NORMAL_CAMERA')
        this.cameraQuality = '8MP'
    }

    takePhoto(): void {
        this.log('PHOTO TAKEN')
    }
    
    getCameraInfo(): string {
        return this.cameraQuality
    }

}