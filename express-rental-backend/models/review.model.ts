import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: [true, 'Internal Error. Missing uid field.'],
        },
        user: {
            type: String,
            required: true,
        },
        score: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        timeCreated: {
            type: Date,
            createdAt: 'timeCreated',
            currentTime: () => Date.now(),
        },
    },
    {
        collection: 'review',
        timestamps: {
            currentTime: () => Date.now(),
            createdAt: 'timeCreated',
        },
    }
);
const Review = mongoose.model('review', reviewSchema);
export default Review;
