import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const userSchema = new mongoose.Schema(
    {
        _id: {
            type: Number,
            required: true,
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
    },
    {
        collection: "user",
        timestamps: {
            currentTime: () => Date.now(),
            createdAt: "timeCreated",
        },
    },
);
userSchema.plugin(autoIncrement.plugin, 'user');
const User = mongoose.model("user", userSchema);
export default User;