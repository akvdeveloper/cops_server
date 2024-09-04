const express = require('express');
const router = express.Router();
const {
  createContact,
  getContacts,
  getContactById,
  deleteContactById,
} = require('../controllers/contactController');

// POST /api/contact
router.post('/contact', createContact);

// GET /api/contact
router.get('/contact', getContacts);

// GET /api/contact/:id
router.get('/contact/:id', getContactById);

// DELETE /api/contact/:id
router.delete('/contact/:id', deleteContactById);

module.exports = router;
