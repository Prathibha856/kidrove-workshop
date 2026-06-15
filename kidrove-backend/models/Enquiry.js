const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: [true, 'Student name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters']
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: [8, 'Age must be at least 8'],
    max: [14, 'Age cannot exceed 14']
  },
  schoolName: {
    type: String,
    required: [true, 'School name is required'],
    trim: true
  },
  parentPhone: {
    type: String,
    required: [true, 'Parent phone is required'],
    trim: true,
    match: [/^[0-9]{10}$/, 'Phone must be 10 digits']
  },
  parentEmail: {
    type: String,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  workshop: {
    type: String,
    default: 'AI & Robotics Summer Workshop'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Enquiry', enquirySchema);