const Enquiry = require('../models/Enquiry');
const Contact = require('../models/Contact');

// Get all enquiries
exports.getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.status(200).json(enquiries);
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
