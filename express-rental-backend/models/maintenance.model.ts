import mongoose from 'mongoose';

const maintenanceSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: [true, 'Internal Error. Missing uid field.'],
        },
        email: {
            type: String,
        },
        maintenanceIssue: {
            type: String,
        },
        tenantName: {
            type: String,
        },
        landlordName: {
            type: String,
        },
        tenantPhoneNumber: {
            type: String,
        },
        landlordPhoneNumber: {
            type: String,
        },
    },
    {
        collection: 'maintenance',
        timestamps: {
            currentTime: () => Date.now(),
            createdAt: 'timeCreated',
        },
    }
);
const Maintenance = mongoose.model('maintenance', maintenanceSchema);
export default Maintenance;
