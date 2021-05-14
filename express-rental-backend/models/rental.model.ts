import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema(
    {
        file: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        price: { 
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
        phoneNum: {
            type: String,
            required: true,
        },
        category: {
            type: String,
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
const Rental = mongoose.model("rental", rentalSchema);
export default Rental;