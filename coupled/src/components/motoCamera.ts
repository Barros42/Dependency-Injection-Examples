import MotoComponent from "./motoComponent"

export default class MotoCamera extends MotoComponent {

    constructor() {
      super('MOTO_CAMERA_X1')
    }

    public takeMotoPhoto(): void {
      this.log('PHOTO TAKEN')
    }

    public recordMotoVideo(): void {
      this.log('VIDEO RECORDED')
    }

 

}