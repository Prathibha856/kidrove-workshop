require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Enquiry = require('./models/Enquiry');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB error:', err));

// POST /api/enquiry
app.post('/api/enquiry', async (req, res) => {
  try {
    const { studentName, age, schoolName, parentPhone, parentEmail } = req.body;
    
    // Validation
    const errors = {};
    if (!studentName || studentName.length < 2) errors.studentName = 'Name must be at least 2 characters';
    if (!age || age < 8 || age > 14) errors.age = 'Age must be 8-14';
    if (!schoolName) errors.schoolName = 'School name required';
    if (!parentPhone || !/^[0-9]{10}$/.test(parentPhone)) errors.parentPhone = 'Valid 10-digit phone required';
    if (parentEmail && !/^\S+@\S+\.\S+$/.test(parentEmail)) errors.parentEmail = 'Valid email required';
    
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors });
    }
    
    const enquiry = new Enquiry({
      studentName: studentName.trim(),
      age: Number(age),
      schoolName: schoolName.trim(),
      parentPhone,
      parentEmail: parentEmail ? parentEmail.toLowerCase().trim() : undefined
    });
    
    await enquiry.save();
    res.status(201).json({ success: true, message: 'Registration successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// GET /api/enquiries (optional - view all)
app.get('/api/enquiries', async (req, res) => {
  const enquiries = await Enquiry.find().sort({ createdAt: -1 });
  res.json({ success: true, count: enquiries.length, data: enquiries });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));