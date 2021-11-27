import Component from "../component";
import ICamera from "./iCamera";

export default class AwesomeCamera extends Component implements ICamera {
    
    private readonly cameraQuality: string

    constructor() {
        super('AWESOME_CAMERA')
        this.cameraQuality = '50MP'
    }

    takePhoto(): void {
        this.log('PHOTO TAKEN')
    }
    
    getCameraInfo(): string {
        return this.cameraQuality
    }

}