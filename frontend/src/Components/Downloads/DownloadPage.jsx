/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaDownload, FaFileAlt } from "react-icons/fa";
import { SocialMedia } from "../../consstant/socialmedia";
import PDFPatchForm from "../Home/core/Auth/Admin/PDFPatchForm"

function DownloadPage({ userData }) {

  const { id } = useParams();
  const [pdfDetails, setPdfDetails] = useState(null);

  let role;

  if (userData) {
    if(userData.user.role==="admin"){
      role=true
    }
    else{
      role=false
    }
  } else {
    role = false;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/pdfs/${id}`
        );
        setPdfDetails(response.data.data.pdf);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!pdfDetails) {
    return <div className="flex justify-center items-center h-screen">
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  </div>;
  }

  const formatUpdatedAtDate = () => {
    const updatedAtDate = new Date(pdfDetails.updatedAt);
    const day = updatedAtDate.getDate();
    const month = updatedAtDate.toLocaleString("default", { month: "long" });
    const year = updatedAtDate.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const handleDownload = async () => {
 
    if (!userData) {
      localStorage.setItem("redirectUrl", window.location.href);
      window.location.href = "/login";
      return;
    }
    const alreadybuy = userData.user.pdfs.includes(pdfDetails._id);

    if (pdfDetails.status === "free" || alreadybuy) {
      const downloadLink = `${import.meta.env.VITE_BACKEND_URL}/pdfs/download-pdf/${id}`;
     
      const anchor = document.createElement("a");
      anchor.href = downloadLink;
      anchor.download = "Unchi_Uddan.pdf";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    } else {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/payment/createOrderId`,
          {
            name: userData.user.firstname,
            email: userData.user.email,
            phone: userData.user.phone,
            amount: pdfDetails.price,
            pdfid: pdfDetails._id
          }
        );
        


        // eslint-disable-next-line no-undef
        const cashfree = Cashfree({ mode: "sandbox" });

        cashfree
          .checkout({
            paymentSessionId: res.data.paymentSessionId,
            returnUrl: `${import.meta.env.VITE_BACKEND_URL}/payment/NRRTWSD/unchiudan/pdf/${userData.user._id}/${id}`,
            // returnUrl: `https://www.youtube.com/`,
            // redirectTarget: "_blank",
          })
          .then(() => {
            console.log("on-going redirection");
          })
          .catch((error) => {
            console.error("Checkout error:", error);
          });

       

      } catch (error) {
        console.error("Checkout error:", error);
      }
     
    }
  };

  return (
    <div className="mx-auto py-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="col-span-3 p-4 overflow-y-auto">
          <h1 className="text-center font-bold text-[2rem] md:text-[2.5rem] mb-6">
            {pdfDetails.category} PDF download <br />
            
          </h1>
          <div className="mx-6 my-12">
            <img
              alt="meow"
              src={`${import.meta.env.VITE_BACKEND_URL_IMAGE}/img/pdf/${pdfDetails.photo}`}
              className="w-full mx-auto rounded-lg"
            />
          </div>

          <div className="w-18 md:mx-12 p-4 border-2 mx-4 rounded-lg mt-16">
            <div className="flex justify-between space-x-3 h-[150px] md:h-[80px]">
              <FaFileAlt className="w-12 h-12" />
              <div className="text-center text-lg leading-[47px]">
                {pdfDetails.name}
                <br />
                <span className="leading-[5px]">
                  Last Updated: {formatUpdatedAtDate()}
                </span>
              </div>
            </div>
            <a href="#">
              <div className="mt-6 flex w-fit hover:bg-teal-500 px-3 py-1 justify-between space-x-3 text-lg mx-auto rounded-full bg-teal-300 text-white">
                <FaDownload className="w-6 h-6" />
                <button onClick={handleDownload}>
                  {pdfDetails.status === "free" ? "Download" : "pay & Download"}
                </button>
              </div>
            </a>
          </div>

          <SocialMedia />

          <h1 className="mt-10 text-[1.3rem] font-[550] text-center">
            Monthly Current Affairs PDF Download {pdfDetails.name}
          </h1>
          <p className="mt-4 text-justify text-lg">
            {pdfDetails.description}
          </p>
          <SocialMedia />
        </div>
      </div>
      {role ? <PDFPatchForm details={pdfDetails} /> : ""}
    </div>
  );
}

export default DownloadPage;
