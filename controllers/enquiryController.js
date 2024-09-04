const Enquiry = require('../models/Enquiry');

// Create Enquiry
exports.createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, program } = req.body;
    const newEnquiry = new Enquiry({ name, email, phone, program });
    const enquiry = await newEnquiry.save();
    res.status(201).json(enquiry);
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// View Enquiries
exports.getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.status(200).json(enquiries);
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// View Single Enquiry
exports.getEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ message: 'Enquiry not found' });
    }
    res.status(200).json(enquiry);
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update Enquiry
exports.updateEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!enquiry) {
      return res.status(404).json({ message: 'Enquiry not found' });
    }
    res.status(200).json(enquiry);
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete Enquiry
exports.deleteEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ message: 'Enquiry not found' });
    }
    res.status(200).json({ message: 'Enquiry deleted successfully' });
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
