import Settings from '../models/Settings.js';

// @desc    Get global settings
// @route   GET /api/settings
// @access  Public
export const getSettings = async (req, res) => {
    try {
        let settings = await Settings.findOne();

        if (!settings) {
            // Create default settings if none exist
            settings = await Settings.create({});
        }

        res.json(settings);
    } catch (err) {
        console.error('Error fetching settings:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// @desc    Update global settings
// @route   PUT /api/settings
// @access  Private/Admin
export const updateSettings = async (req, res) => {
    try {
        const { supportPhone, supportEmail, supportWhatsApp } = req.body;

        let settings = await Settings.findOne();

        if (!settings) {
            settings = new Settings({});
        }

        if (supportPhone) settings.supportPhone = supportPhone;
        if (supportEmail) settings.supportEmail = supportEmail;
        if (supportWhatsApp) settings.supportWhatsApp = supportWhatsApp;

        await settings.save();

        res.json(settings);
    } catch (err) {
        console.error('Error updating settings:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
