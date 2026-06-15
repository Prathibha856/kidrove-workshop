import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const registrationSchema = z.object({
  studentName: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name too long'),
  age: z.number().min(8, 'Age must be between 8 and 14').max(14, 'Age must be between 8 and 14'),
  schoolName: z.string().min(2, 'School name is required'),
  parentPhone: z.string().regex(/^[0-9]{10}$/, 'Enter a valid 10-digit phone number'),
  parentEmail: z.string().email('Enter a valid email').optional().or(z.literal(''))
});

function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: { studentName: '', age: '', schoolName: '', parentPhone: '', parentEmail: '' }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://kidrove-workshop-zv5i.onrender.com/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (response.ok) {
        toast.success('🎉 Registration successful! We will contact your parent soon.');
        reset();
      } else {
        if (result.errors) Object.values(result.errors).forEach(err => toast.error(err));
        else toast.error(result.message || 'Registration failed.');
      }
    } catch (error) {
      toast.error('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={styles.container}
      >
        <h2 style={styles.title}>📝 Register Your Child</h2>
        <p style={styles.subtitle}>Limited seats – secure your spot today!</p>

        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          {/* Student Name */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>👩‍🎓 Student Full Name *</label>
            <input type="text" {...register('studentName')} placeholder="e.g., Riya Sharma" style={inputStyle(!!errors.studentName)} />
            {errors.studentName && <p style={styles.error}>{errors.studentName.message}</p>}
          </div>

          {/* Age */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>🎂 Age (8-14 years) *</label>
            <input type="number" {...register('age', { valueAsNumber: true })} placeholder="e.g., 10" style={inputStyle(!!errors.age)} />
            {errors.age && <p style={styles.error}>{errors.age.message}</p>}
          </div>

          {/* School Name */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>🏫 School Name *</label>
            <input type="text" {...register('schoolName')} placeholder="e.g., Delhi Public School" style={inputStyle(!!errors.schoolName)} />
            {errors.schoolName && <p style={styles.error}>{errors.schoolName.message}</p>}
          </div>

          {/* Parent Phone */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>📞 Parent Phone *</label>
            <input type="tel" {...register('parentPhone')} placeholder="9876543210" style={inputStyle(!!errors.parentPhone)} />
            {errors.parentPhone && <p style={styles.error}>{errors.parentPhone.message}</p>}
          </div>

          {/* Parent Email */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>📧 Parent Email <span style={{ fontWeight: 'normal', opacity: 0.7 }}>(Optional)</span></label>
            <input type="email" {...register('parentEmail')} placeholder="parent@example.com" style={inputStyle(!!errors.parentEmail)} />
            {errors.parentEmail && <p style={styles.error}>{errors.parentEmail.message}</p>}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            style={buttonStyle(isSubmitting)}
          >
            {isSubmitting ? (
              <span style={styles.spinnerWrapper}>
                <span className="spinner"></span> Submitting...
              </span>
            ) : (
              '✨ Register Now ✨'
            )}
          </motion.button>
        </form>
      </motion.div>

      <style>{`
        .spinner {
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 2px solid white;
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-right: 8px;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

const inputStyle = (hasError) => ({
  width: '100%',
  padding: '14px 16px',
  fontSize: '1rem',
  border: hasError ? '2px solid #ff6b6b' : '1px solid #e2e8f0',
  borderRadius: '16px',
  backgroundColor: '#fff',
  color: '#1a1a2e',
  transition: 'all 0.2s',
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
});

const buttonStyle = (disabled) => ({
  width: '100%',
  padding: '14px',
  background: disabled ? '#94a3b8' : '#4f46e5',
  color: 'white',
  border: 'none',
  borderRadius: '40px',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  cursor: disabled ? 'not-allowed' : 'pointer',
  transition: 'all 0.3s',
  boxShadow: disabled ? 'none' : '0 6px 14px rgba(79, 70, 229, 0.3)',
});

const styles = {
  section: {
    padding: '60px 20px',
    background: 'linear-gradient(145deg, #f9fafc, #eef2ff)',
  },
  container: {
    maxWidth: '650px',
    margin: '0 auto',
    background: 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(20px)',
    borderRadius: '36px',
    padding: '40px 30px',
    boxShadow: '0 25px 45px -12px rgba(0,0,0,0.2)',
    border: '1px solid rgba(255,255,255,0.5)',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#1e1b4b',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '1rem',
    color: '#4b5563',
    marginBottom: '32px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontWeight: '600',
    color: '#1f2937',
    fontSize: '0.9rem',
  },
  error: {
    color: '#ff6b6b',
    fontSize: '0.8rem',
    marginTop: '4px',
  },
  spinnerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
};

export default RegistrationForm;