const Contact = require('../models/Contact');

// Create a new contact
exports.createContact = async (req, res) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;

    const newContact = new Contact({
      fullName,
      email,
      phone,
      subject,
      message,
    });

    const contact = await newContact.save();
    res.status(201).json(contact);
  } catch (error) {
    console.error('Error creating contact:', error);
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

// Get a contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json(contact);
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a contact by ID
exports.deleteContactById = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
