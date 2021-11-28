import BaseStorage from './baseStorage';

export default class MediumStorage extends BaseStorage{

    constructor() {
        super('MEDIUM_STORAGE', '32GB')
    }

}