import Component from "../component";
import ICamera from "./iCamera";

export default abstract class BaseCamera extends Component implements ICamera {

    private readonly cameraQuality: string

    constructor(cameraModel: string, cameraQuality: string) {
        super(cameraModel)
        this.cameraQuality = cameraQuality
    }

    takePhoto(): void {
        this.log('PHOTO TAKEN')
    }
    
    getCameraInfo(): string {
        return this.cameraQuality
    }

}