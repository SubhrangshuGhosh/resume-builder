import React from "react";

const ResumePreview = ({ formData }) => {
  return (
    <div id="resume-preview" className="text-white mt-6">
      <h2 className="text-3xl font-bold">{formData.name}</h2>
      <p className="text-lg">{formData.email}</p>
      <p className="text-lg">{formData.phone}</p>
      <h3 className="text-xl font-semibold mt-4">Education</h3>
      <p>{formData.education}</p>
      <h3 className="text-xl font-semibold mt-4">Experience</h3>
      <p>{formData.experience}</p>
      <h3 className="text-xl font-semibold mt-4">Skills</h3>
      <p>{formData.skills}</p>
    </div>
  );
};

export default ResumePreview;
