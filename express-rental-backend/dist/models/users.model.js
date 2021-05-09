"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    uid: {
        type: String,
        required: [true, "Internal Error. Missing uid field."],
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
}, {
    timestamps: {
        currentTime: () => Date.now(),
        createdAt: "timeCreated",
    },
});
const User = mongoose_1.default.model("user", userSchema);
exports.default = User;
//# sourceMappingURL=users.model.js.map