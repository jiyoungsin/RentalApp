import mongoose from 'mongoose';

const rentalSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: [true, 'Internal Error. Missing uid field.'],
        },
        unitPictures: {
            type: [],
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        parking: {
            type: Number,
        },
        room: {
            type: Number,
        },
        bathroom: {
            type: Number,
        },
        pet: {
            type: Boolean,
        },
        size: {
            type: Number,
        },
        balcony: {
            type: Number,
        },
        airConditioning: {
            type: Boolean,
        },
        gym: {
            type: Boolean,
        },
        dishwasher: {
            type: Boolean,
        },
        hydro: {
            type: Boolean,
        },
        wifi: {
            type: Boolean,
        },
        water: {
            type: Boolean,
        },
        nearFacility: {
            type: String,
        },
        nearSubway: {
            type: String,
        },
        roommate: {
            type: Boolean,
        },
        availability: {
            type: Boolean,
        },
        floorNumber: {
            type: Number,
        },
        additionalInfo: {
            type: String,
        },
        Review: {
            type: [],
        },
    },
    {
        collection: 'rentUnit',
        timestamps: {
            currentTime: () => Date.now(),
            createdAt: 'timeCreated',
        },
    }
);
const Rental = mongoose.model('rentUnit', rentalSchema);
export default Rental;
