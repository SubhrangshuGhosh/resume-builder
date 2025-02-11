import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./styles/styles.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDF = () => {
    const input = document.getElementById("resume-preview");
    input.style.backgroundColor = "white";
    input.style.color = "black";
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 190, 250);
      pdf.save("Resume.pdf");
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="card">
        <ResumeForm formData={formData} handleChange={handleChange} />
        <div className="flex flex-col items-center">
          <ResumePreview formData={formData} />
          <button onClick={generatePDF} className="mt-6">
            Download PDF 📄
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default App;
