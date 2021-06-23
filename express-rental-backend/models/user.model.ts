import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: [true, 'Internal Error. Missing uid field.'],
        },
        userName: {
            type: String,
        },
        password: {
            type: String,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        rentals: {
            type: String,
        },
        role: {
            type: String,
        },
    },
    {
        collection: 'user',
        timestamps: {
            currentTime: () => Date.now(),
            createdAt: 'timeCreated',
        },
    }
);
const User = mongoose.model('user', userSchema);

export default User;
