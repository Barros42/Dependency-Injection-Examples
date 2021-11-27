export default abstract class MotoComponent {

    private readonly modelName: string

    constructor(modelName: string) {
        this.modelName = modelName
    }

    protected log(message: string): void {
        console.log(`-# ${new Date()} #-`)
        console.log(`@ [${this.modelName}] - ${message}\n`)
    }

}