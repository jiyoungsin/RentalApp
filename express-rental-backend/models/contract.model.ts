import mongoose from 'mongoose';

const contractSchema = new mongoose.Schema(
   {
      _id: {
         type: String,
         required: [true, 'Internal Error. Missing uid field.'],
      },
      rentalUnit: {
         type: [],
         required: true,
      },
      Tenant: {
         type: String,
         required: true,
      },
      Landlord: {
         type: String,
         required: true,
      },
      fromDate: {
         type: Date,
         required: true,
      },
      toDate: {
         type: Date,
         required: true,
      },
      phoneNum: {
         type: String,
         required: true,
      },
      contractDetails: {
         type: String,
         required: true,
      },
   },
   {
      collection: 'contact',
      timestamps: {
         currentTime: () => Date.now(),
         createdAt: 'timeCreated',
      },
   }
);
const Contract = mongoose.model('contact', contractSchema);
export default Contract;
