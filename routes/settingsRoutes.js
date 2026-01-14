import express from 'express';
import { getSettings, updateSettings } from '../controllers/settingsController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

// GET settings is public (so users can see contact info)
router.get('/', getSettings);

// UPDATE settings requires admin
router.put('/', protect, adminOnly, updateSettings);

export default router;
