import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: [true, "Internal Error. Missing uid field."],
        },
        userName:{
            type: String,
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
const User = mongoose.model("user", userSchema);
export default User;