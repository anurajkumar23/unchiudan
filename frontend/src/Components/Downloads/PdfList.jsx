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
    <div className="mx-10">
      <h1 className="text-center text-[1.5rem] md:text-[2rem] mb-4 ">
        Latest Current Affairs
      </h1>
      <p className="text-justify text-md mb-16 md:mx-[6rem]">
        Current Affairs for BPSC, UPPSC, MPPSC, JPSC, BSSC, RPSC, SSC, और अन्य
        Competitive और&nbsp;Government Job Examinations के लिए ऊँची उड़ान वेबसाइट
        और फेसबुक पेज को Follow करें।
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {pdfs.map((pdf, index) => (
          <PdfComp key={index} title={pdf.title} date={pdf.date} />
        ))}
      </div>
    </div>
  );
}
