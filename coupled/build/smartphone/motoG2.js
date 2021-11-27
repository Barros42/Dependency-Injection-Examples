"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var motoCamera_1 = __importDefault(require("../components/motoCamera"));
var motoMemory_1 = __importDefault(require("../components/motoMemory"));
var motoSpeaker_1 = __importDefault(require("../components/motoSpeaker"));
var motoStorage_1 = __importDefault(require("../components/motoStorage"));
var MotoG2 = /** @class */ (function () {
    function MotoG2() {
        this.camera = new motoCamera_1.default();
        this.speaker = new motoSpeaker_1.default();
        this.storage = new motoStorage_1.default();
        this.memory = new motoMemory_1.default();
    }
    MotoG2.prototype.takeMotoPhoto = function () {
        return this.camera.takeMotoPhoto();
    };
    MotoG2.prototype.recordMotoVideo = function () {
        return this.camera.recordMotoVideo();
    };
    MotoG2.prototype.playMotoMusic = function () {
        return this.speaker.playMotoSound();
    };
    MotoG2.prototype.showMotoStorageInfo = function () {
        return this.storage.showMotoInfo();
    };
    MotoG2.prototype.showMotoMemoryInfo = function () {
        return this.memory.showMotoInfo();
    };
    return MotoG2;
}());
exports.default = MotoG2;
