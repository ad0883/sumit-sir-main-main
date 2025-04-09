import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../../css/pages/enrollNow/enrollnow.css';

const EnrollNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { courseName } = location.state || {};

  const [isModalOpen, setIsModalOpen] = useState(false); 

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    graduationYear: '',
    interestedCourse: courseName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://backend-code-hcvy.onrender.com/enroll', formData);
      console.log('Success:', response.data);

      setIsModalOpen(true);

      // Handle success, e.g., show a success message or redirect
      setFormData({ // Clear form data on successful submission
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        graduationYear: '',
        interestedCourse: '',
      });

       // Redirect to home page after 5 seconds
       setTimeout(() => {
        navigate('/');
      }, 5000);

    } catch (error) {
      console.error('Error:', error);
      // Handle error, e.g., show an error message
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='outer'>
    {!isModalOpen && (
    <div className="registration-form">
      <h2>Welcome to the Sprint Code Family!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name<span className='required-field'>*</span>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name<span className='required-field'>*</span>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email Address<span className='required-field'>*</span>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number<span className='required-field'>*</span>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Graduation Year<span className='required-field'>*</span>
          <select
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
            required
          >
            <option value="">Select one</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
            <option value="none">None</option>
          </select>
        </label>

        <label>
          Interested Course<span className='required-field'>*</span>
          <input
            type=""
            name='interestedCourse'
            value={courseName}
          />
        </label>

        
        <button type="submit">Enroll Now</button>
      </form>
    </div>
    )}

    {isModalOpen && (
    <div className="modal">
      <div className="modal-content">
        <h3>Enrollment Successful!</h3>
        <p>Thank you for joining Sprint Code! You’ll be redirected to the homepage shortly.</p>
      </div>
    </div>
  )}

    </div>
  );
};

export default EnrollNow;

