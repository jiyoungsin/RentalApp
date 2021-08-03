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
        description: {
            type: String,
            required: true,
        },
        timeCreated: {
            type: Date,
        },
        rental_id:{
            type: String,
            required: true,
        }
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
