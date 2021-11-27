"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MotorolaCamera = /** @class */ (function () {
    function MotorolaCamera() {
        this.MODEL_NAME = 'MOTO_CAMERA_X1';
    }
    MotorolaCamera.prototype.takePhoto = function () {
        this.log('PHOTO TAKEN');
    };
    MotorolaCamera.prototype.recordVideo = function () {
        this.log('VIDEO RECORDED');
    };
    MotorolaCamera.prototype.log = function (message) {
        console.log("-# " + new Date() + " #-");
        console.log("@ [" + this.MODEL_NAME + "] - " + message + "\n");
    };
    return MotorolaCamera;
}());
exports.default = MotorolaCamera;
