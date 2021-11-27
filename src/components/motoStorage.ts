import MotoComponent from "./motoComponent";

export default class MotoStorage extends MotoComponent {

    constructor() {
        super('MOTO_STORAGE_X1')
    }

    public showMotoInfo(): void {
        this.log('STORAGE INFO: 8GB')
    }   

}