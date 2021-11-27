"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Component = /** @class */ (function () {
    function Component(modelName) {
        this.modelName = modelName;
    }
    Component.prototype.log = function (message) {
        console.log("-# " + new Date() + " #-");
        console.log("@ [" + this.modelName + "] - " + message + "\n");
    };
    return Component;
}());
exports.default = Component;
