const express = require('express');
const router = express.Router();
const { createEnquiry, getEnquiries, getEnquiry, updateEnquiry, deleteEnquiry } = require('../controllers/enquiryController');

// POST /api/enquiry
router.post('/enquiry', createEnquiry);

// GET /api/enquiries
router.get('/enquiries', getEnquiries);

// GET /api/enquiry/:id
router.get('/enquiry/:id', getEnquiry);

// PUT /api/enquiry/:id
router.put('/enquiry/:id', updateEnquiry);

// DELETE /api/enquiry/:id
router.delete('/enquiry/:id', deleteEnquiry);

module.exports = router;
