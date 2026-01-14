import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
    supportPhone: {
        type: String,
        required: true,
        default: '+91 75502 12046'
    },
    supportEmail: {
        type: String,
        required: true,
        default: 'support@aksecuretech.com'
    },
    supportWhatsApp: {
        type: String,
        required: true,
        default: '917550212046'
    }
}, {
    timestamps: true
});

const Settings = mongoose.model('Settings', settingsSchema);

export default Settings;
