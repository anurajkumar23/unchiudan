import React from "react";
import { FaFileAlt } from "react-icons/fa";

function PdfComp() {
  return (
    <div>
      <div className="w-26 flex justify between">
        <div>
          <FaFileAlt className="w-12 h-12" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-center text-md"> UPSC Exam PDF Notes 1 </h1>
          <p>29 August</p>
        </div>
      </div>
    </div>
  );
}

export default PdfComp;
