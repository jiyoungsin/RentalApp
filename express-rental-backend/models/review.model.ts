import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: [true, "Internal Error. Missing uid field."],
        },
        user: {
            type: [],
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        collection: "rental",
        timestamps: {
            currentTime: () => Date.now(),
            createdAt: "timeCreated",
        },
    },
);
const Review = mongoose.model("rental", reviewSchema);
export default Review;