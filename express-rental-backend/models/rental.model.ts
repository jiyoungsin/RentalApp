import mongoose from 'mongoose';

const rentalSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: [true, 'Internal Error. Missing uid field.'],
        },
        type: {
            type: String,
        },
        streetNumber: {
            type: String,
        },
        streetName: {
            type: String,
        },
        postalCode: {
            type: String,
        },
        price: {
            type: String,
        },
        parking: {
            type: String,
        },
        room: {
            type: String,
        },
        bathroom: {
            type: String,
        },
        petFriendly: {
            type: Boolean,
        },
        balcony: {
            type: Boolean,
        },
        airConditional: {
            type: Boolean,
        },
        gym: {
            type: Boolean,
        },
        dishWasher: {
            type: Boolean,
        },
        hydro: {
            type: Boolean,
        },
        internet: {
            type: Boolean,
        },
        water: {
            type: Boolean,
        },
        roommate: {
            type: Boolean,
        },
        availability: {
            type: Boolean,
        },
        additionalInfo: {
            type: String,
        },
        Landlord: {
            type: String,
        },
        images:[]
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
