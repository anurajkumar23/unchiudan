import React from "react";
import PdfComp from "./PdfComp";
export default function PdfList() {
  const pdfs = [
    {
      title: "UPSC Exam PDF Notes 1",
      date: "29 August",
    },
    // dummy test data
  ];

  return (
    <div>
      {pdfs.map((pdf, index) => (
        <PdfComp key={index} title={pdf.title} date={pdf.date} />
      ))}
    </div>
  );
}
