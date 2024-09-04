const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getEnquiries, getContacts } = require('../controllers/adminController');

// GET /api/admin/enquiries
router.get('/admin/enquiries', authMiddleware, getEnquiries);

// GET /api/admin/contacts
router.get('/admin/contacts', authMiddleware, getContacts);

module.exports = router;
