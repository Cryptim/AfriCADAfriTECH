import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';

export function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: 'solidworks-basics',
    experience: 'beginner'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Register for Training</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Course
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <optgroup label="SolidWorks">
                    <option value="solidworks-basics">SolidWorks Basics</option>
                    <option value="solidworks-advanced">Advanced Part Modeling</option>
                    <option value="solidworks-assembly">Assembly Design</option>
                  </optgroup>
                  <optgroup label="AutoCAD">
                    <option value="autocad-fundamentals">AutoCAD Fundamentals</option>
                    <option value="autocad-advanced">2D Advanced Techniques</option>
                  </optgroup>
                  <optgroup label="Embedded Systems">
                    <option value="microcontroller">Microcontroller Programming</option>
                    <option value="advanced-arduino">Advanced Arduino</option>
                    <option value="raspberry-pi">Raspberry Pi Development</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}