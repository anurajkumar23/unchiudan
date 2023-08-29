import React from "react";
import PdfCard from "./PdfCard"; // Adjust the path to match the actual location of PdfCard

export default function PdfList() {
  const pdfs = [
    {
      title: "UPSC Exam PDF Notes 1",
      date: "29 August",
    },
    // Add more PDF objects here
  ];

  return (
    <div>
      {pdfs.map((pdf, index) => (
        <PdfCard key={index} title={pdf.title} date={pdf.date} />
      ))}
    </div>
  );
}
