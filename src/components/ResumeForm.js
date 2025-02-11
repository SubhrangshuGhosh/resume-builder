import React from "react";

const ResumeForm = ({ formData, handleChange }) => {
  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-center mb-6 text-white">
        Resume Builder 🚀
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="experience"
          placeholder="Work Experience"
          value={formData.experience}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="skills"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
};

export default ResumeForm;
