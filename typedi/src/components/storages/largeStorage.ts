import { Service } from 'typedi';
import BaseStorage from './baseStorage';

@Service()
export default class LargeStorage extends BaseStorage {

    constructor() {
        super('LARGE_STORAGE', '64GB')
    }

}