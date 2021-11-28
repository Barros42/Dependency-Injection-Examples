import BaseStorage from './baseStorage';

export default class LargeStorage extends BaseStorage {

    constructor() {
        super('LARGE_STORAGE', '64GB')
    }

}