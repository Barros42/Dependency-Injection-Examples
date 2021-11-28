import BaseStorage from './baseStorage';

export default class SmallStorage extends BaseStorage {

    constructor() {
        super('SMALL_STORAGE', '16GB')
    }

}