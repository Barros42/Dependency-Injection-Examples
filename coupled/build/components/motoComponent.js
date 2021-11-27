"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MotoComponent = /** @class */ (function () {
    function MotoComponent(modelName) {
        this.modelName = modelName;
    }
    MotoComponent.prototype.log = function (message) {
        console.log("-# " + new Date() + " #-");
        console.log("@ [" + this.modelName + "] - " + message + "\n");
    };
    return MotoComponent;
}());
exports.default = MotoComponent;
