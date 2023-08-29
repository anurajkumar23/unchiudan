import React from "react";
import { FaFileAlt } from "react-icons/fa";

function DownloadPDF() {
  return (
    <div>
      <div className="w-26 flex justify between">
        <div>
          <FaFileAlt className="w-12 h-12" />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default DownloadPDF;
