import mongoose from 'mongoose';

const rentalSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: [true, 'Internal Error. Missing uid field.'],
        },
        images: {
            type: [],
           // required: true,
        },
        streetNumber: {
            type: String,
            required: true,
        },
        streetName: {
            type: String,
            required: true,
        },
        postalCode: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        type: {
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
        balcony: {
            type: Number,
        },
        airConditional: {
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
        lastUpdate: {
            type: Date,
        },
        Review: {
            type: [],
        },
        Landlord: {
            type: String,
            required: true,
        },
        Tanant:{
            type: String,
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
