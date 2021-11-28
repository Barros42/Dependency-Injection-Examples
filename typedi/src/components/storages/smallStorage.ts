import 'reflect-metadata'
import { Service } from 'typedi';
import BaseStorage from './baseStorage';

@Service()
export default class SmallStorage extends BaseStorage {

    constructor() {
        super('SMALL_STORAGE', '16GB')
    }

}