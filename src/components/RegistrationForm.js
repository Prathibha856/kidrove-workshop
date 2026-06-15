// RegistrationForm.js - Updated for students
import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    age: '',
    schoolName: '',
    parentPhone: '',
    parentEmail: ''  // optional
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Student name validation
    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    } else if (formData.studentName.length < 2) {
      newErrors.studentName = 'Name must be at least 2 characters';
    }
    
    // Age validation (8-14)
    const ageNum = parseInt(formData.age);
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(ageNum) || ageNum < 8 || ageNum > 14) {
      newErrors.age = 'Age must be between 8 and 14 years';
    }
    
    // School name validation
    if (!formData.schoolName.trim()) {
      newErrors.schoolName = 'School name is required';
    }
    
    // Parent phone validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.parentPhone) {
      newErrors.parentPhone = 'Parent phone number is required';
    } else if (!phoneRegex.test(formData.parentPhone)) {
      newErrors.parentPhone = 'Enter valid 10-digit phone number';
    }
    
    // Parent email validation (optional but if provided, must be valid)
    if (formData.parentEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.parentEmail)) {
        newErrors.parentEmail = 'Enter a valid email address';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) {
    setSubmitMessage('Please fix the errors above');
    setMessageType('error');
    setTimeout(() => setSubmitMessage(''), 3000);
    return;
  }
  
  setIsSubmitting(true);
  setSubmitMessage('');
  
  try {
    const response = await fetch('http://localhost:5000/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    
    if (response.ok) {
      setSubmitMessage('✅ Registration successful! We will contact your parent soon.');
      setMessageType('success');
      setFormData({
        studentName: '',
        age: '',
        schoolName: '',
        parentPhone: '',
        parentEmail: ''
      });
    } else {
      if (data.errors) {
        setErrors(data.errors);
        setSubmitMessage('Please fix the errors below.');
      } else {
        setSubmitMessage(data.message || 'Registration failed. Try again.');
      }
      setMessageType('error');
    }
  } catch (error) {
    console.error('Fetch error:', error);
    setSubmitMessage('❌ Cannot connect to server. Make sure backend is running on port 5000.');
    setMessageType('error');
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  }
};

  return (
    <section style={{ padding: '50px', background: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
        Student Registration Form
      </h2>
      <div style={{ maxWidth: '550px', margin: '0 auto', background: '#f8f9fa', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
        
        <form onSubmit={handleSubmit}>
          {/* Student Name */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Student Full Name *
            </label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="e.g., Riya Sharma"
              style={inputStyle(errors.studentName)}
            />
            {errors.studentName && <ErrorMessage msg={errors.studentName} />}
          </div>
          
          {/* Age */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Age (8-14 years) *
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="e.g., 10"
              min="8"
              max="14"
              style={inputStyle(errors.age)}
            />
            {errors.age && <ErrorMessage msg={errors.age} />}
          </div>
          
          {/* School Name */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              School Name *
            </label>
            <input
              type="text"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              placeholder="e.g., Delhi Public School"
              style={inputStyle(errors.schoolName)}
            />
            {errors.schoolName && <ErrorMessage msg={errors.schoolName} />}
          </div>
          
          {/* Parent Phone */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Parent/Guardian Phone *
            </label>
            <input
              type="tel"
              name="parentPhone"
              value={formData.parentPhone}
              onChange={handleChange}
              placeholder="9876543210"
              style={inputStyle(errors.parentPhone)}
            />
            {errors.parentPhone && <ErrorMessage msg={errors.parentPhone} />}
          </div>
          
          {/* Parent Email (Optional) */}
          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Parent Email <span style={{ fontWeight: 'normal', color: '#666' }}>(Optional)</span>
            </label>
            <input
              type="email"
              name="parentEmail"
              value={formData.parentEmail}
              onChange={handleChange}
              placeholder="parent@example.com"
              style={inputStyle(errors.parentEmail)}
            />
            {errors.parentEmail && <ErrorMessage msg={errors.parentEmail} />}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '14px',
              background: isSubmitting ? '#ccc' : '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'background 0.3s'
            }}
          >
            {isSubmitting ? 'Registering...' : 'Register Now'}
          </button>
          
          {submitMessage && (
            <div style={{
              marginTop: '20px',
              padding: '12px',
              borderRadius: '8px',
              textAlign: 'center',
              background: messageType === 'success' ? '#d4edda' : '#f8d7da',
              color: messageType === 'success' ? '#155724' : '#721c24'
            }}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

// Helper styles to reduce repetition
const inputStyle = (hasError) => ({
  width: '100%',
  padding: '12px',
  border: hasError ? '2px solid #ff6b6b' : '1px solid #ddd',
  borderRadius: '8px',
  fontSize: '16px'
});

const ErrorMessage = ({ msg }) => (
  <p style={{ color: '#ff6b6b', marginTop: '5px', fontSize: '14px' }}>{msg}</p>
);

export default RegistrationForm;