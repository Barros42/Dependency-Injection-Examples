"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var motoG2_1 = __importDefault(require("./smartphone/motoG2"));
console.clear();
var motoG2 = new motoG2_1.default();
motoG2.takeMotoPhoto();
motoG2.recordMotoVideo();
motoG2.playMotoMusic();
motoG2.showMotoMemoryInfo();
motoG2.showMotoStorageInfo();
