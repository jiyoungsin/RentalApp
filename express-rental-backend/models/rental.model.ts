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
        streetName: {
            type: String,
            required: true,
        },
        streetNumber: {
            type: String,
        },
        price: {
            type: Number,
            required: true,
        },
        postalCode: {
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
        wifi: {
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
        postDate: {
            type: Date,
        },
        Reviews: {
            type: [],
        },
        image: {
            data: Buffer,
            contentType: String
        },
        landlord: {
            type: String,
            required: true,
        },
        tanant:{
            type: [],
        }
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
