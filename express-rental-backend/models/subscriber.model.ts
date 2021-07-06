import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: [true, 'Internal Error. Missing uid field.'],
        },
        email: {
            type: String,
            required: true,
        },
    },
    {
        collection: 'subscriber',
        timestamps: {
            currentTime: () => Date.now(),
            createdAt: 'timeCreated',
        },
    }
);
const subscriber = mongoose.model('subscriber', subscriberSchema);
export default subscriber;
