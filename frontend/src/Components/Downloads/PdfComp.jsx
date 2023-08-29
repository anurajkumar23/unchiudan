import React from "react";
import { FaFileAlt } from "react-icons/fa";

function PdfComp({ title, date }) {
  return (
    <div className="w-24 flex justify-between p-4 border border-2 rounded-lg">
      <div>
        <FaFileAlt className="w-12 h-12" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-md">{title}</h1>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default PdfComp;
