import MotoComponent from "./motoComponent";

export default class MotoMemory extends MotoComponent {

    constructor() {
        super('MOTO_RAM_X1')
    }

    public showMotoInfo(): void {
        this.log('MEMORY INFO: 1GB')
    }

}