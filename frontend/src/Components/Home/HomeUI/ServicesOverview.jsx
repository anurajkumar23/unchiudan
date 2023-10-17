import {
  FaFileAlt,

  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../core/Homepage/HighlightText";
import CodeBlocks from "../core/Homepage/CodeBlocks";
import { AiFillRead } from "react-icons/ai";
import { BiSolidNews } from "react-icons/bi";
import Axios from 'axios';


function ServicesOverview() {
  const handleClick = async () => {
    try {
      const response = await Axios.get(`${import.meta.env.VITE_BACKEND_URL}/currentaffairs/dailyquiz`);
  
      if (response.status === 200) {
        const data = response.data;
        const id = data.id;
        window.location.href = `${import.meta.env.VITE_BACKEND_URL}/currentaffairs/${id}`;


      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      // Handle errors here
      console.error('Error:', error);
    }
  };
  return (
    <div className="relative mx-auto  bg-richblack-800 font-bold py-4 px-[3%] ">
      <h1 className="text-center text-[1.5rem] md:text-[2rem] mb-6 font-semibold text-white">
        हमारे सेवाएँ: <HighlightText text={"Our Services"} />
      </h1>
      <div className="flex flex-wrap items-center">
        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78 ">
          <div className="relative flex flex-col min-w-0 break-words bg-richblack-800 w-full mb-6  rounded-lg bg-pink-500">
            <img
              alt="meow"
              src="/uchiudan.png"
              className="w-full align-middle rounded-t-lg"
            />
          </div>
        </div>

        <div className="w-full md:w-6/12 px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-4">
              <button  onClick={handleClick}>
                <div className="relative flex flex-col min-w-0  m-4   transition-all duration-200 hover:scale-95 w-fit shadow-md  shadow-pure-greys-500">
                  <div className="px-4 py-5 flex-auto relative w-fit h-fit shadow-blue-700 shadow-[0px_0px_30px_0px]">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center  w-fit h-fit mb-5 rounded-full bg-white">
                      <FaUserTie className=" w-10 h-10" />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold text-white ">
                      Daily Quiz / डेली प्रश्न
                    </h6>
                    <p className="mb-4 text-blueGray-500 text-white">
                      ऊँची उड़ान Telegram पर डेली 10 Questions अपडेट किये जाते
                      हैं।
                    </p>
                  </div>
                </div>
              </button>
              <Link to="/News">
                <div className="relative flex flex-col min-w-0 transition-all duration-200 hover:scale-95 w-fit shadow-md m-4 shadow-pure-greys-500">
                  <div className="px-4 py-5 flex-auto relative w-fit h-fit shadow-blue-700 shadow-[0px_0px_30px_0px]">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center  w-fit h-fit mb-5 rounded-full bg-white">
                      <BiSolidNews className=" w-10 h-10" />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold text-white">
                      News / Blog
                    </h6>
                    <p className="mb-4 text-blueGray-500 text-white">
                      पाएं सभी नवीनतम डेली समाचार और ब्लॉग: Get All Latest डेली
                      News
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <Link to="/Currentaffairs">
                <div className="relative flex flex-col min-w-0  m-4   transition-all duration-200 hover:scale-95 w-fit shadow-md  shadow-pure-greys-500">
                  <div className="px-4 py-5 flex-auto relative w-fit h-fit shadow-blue-700 shadow-[0px_0px_30px_0px]">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center  w-fit h-fit mb-5 rounded-full bg-white">
                      <AiFillRead className=" w-10 h-10" />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold text-white">
                      कर्रेंट अफेयर्स
                    </h6>
                    <p className="mb-4 text-blueGray-500 text-white">
                      कर्रेंट अफेयर्स के Updates से सम्बंधित सभी Questions भी।
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/pdfs">
                <div className="relative flex flex-col min-w-0 transition-all duration-200 hover:scale-95 w-fit shadow-md m-4 shadow-pure-greys-500">
                  <div className="px-4 py-5 flex-auto relative w-fit h-fit shadow-blue-700 shadow-[0px_0px_30px_0px]">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center  w-fit h-fit mb-5 rounded-full bg-white">
                      <FaFileAlt className=" w-10 h-10" />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold text-white">
                      Monthly PDFs / मासिक PDF
                    </h6>
                    <p className="mb-4 text-blueGray-500 text-white">
                      पूरे महीने के प्रश्नों के मासिक अपडेट के PDF हर महीने
                      उपलब्ध होंगे।।
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-6">
        <CodeBlocks
          position={"lg:flex-row"}
      
          heading={
            <div className="text-4xl font-semibold text-white">
              Daily Quiz / डेली प्रश्न
              <HighlightText text={"Practice your potential"} />
            </div>
          }
          subheading={
            "Daily Practice करें और अपडेट रहें सभी नवीनतम Updates के साथ, सभी प्रकार के Current Affairs के साथ। Daily Quiz दें और अपनी स्थानीय ज्ञान को सीखने का सुनहरा मौका पाएं। Buy करें और अपनी तैयारी को नवाचीन बनाएं, reading करके Current Affairs को प्रैक्टिस करें।"
          }
          ctabtn1={{
            btnText: "Try it Yourself",
            linkto: "/Currentaffairs",
            active: true,
          }}
          ctabtn2={{
            btnText: "Learn More",
            linkto: "/login",
            active: false,
            
          }}
          codeblock={[
            `ऊँची उड़ान
में आपका स्वागत है!`,
            `पाएं Latest Current Affairs,Monthly PDF,Daily Quiz / डेली प्रश्न,News / Blog`,
            ` और अन्य Competitive और Government Job Examinations के लिए ऊँची उड़ान वेबसाइट और Telegram पेज को join करें।`,
          ]}
          codeColor={"text-yellow-25"}

          backgroudGradient={<div className="codeblock1 absolute"></div>}
        />
      </div>
      <div className="mx-6">
        <CodeBlocks
          position={"lg:flex-row-reverse"}

          heading={
            <div className="text-4xl font-semibold text-white">
              Free और
              <HighlightText text={`पैड PDFs  `} />
              <br />
              <HighlightText text={`खरीदने की शुरुआत करें`} />
            </div>
          }
          subheading={
            "Go ahead, Start Buying Paid PDFs! - अब आगे बढ़ें, पैड PDFs खरीदने की शुरुआत करें!"
          }
          ctabtn1={{
            btnText: "Continue Lesson",
            linkto: "/pdfs",
            active: true,
            
          }}
          ctabtn2={{
            btnText: "learn more",
            linkto: "/login",
            active: false,
           
          }}
          codeblock={[
            `ऊँची उड़ान - Your Destination for All Current Affairs!`,
            `मुफ्त में पाओ Latest Current Affairs के PDFs प्राप्त करें मासिक Paid PDFs भी खरीदे| `,
            ` Daily News और Insightful Quiz से मिलेगा दिलचस्प ज्ञान। तो अब तैयारी करो आज़ादी के अंदर, यहाँ पर ही!`,
          ]}
          codeColor={"text-yellow-25"}
          backgroudGradient={<div className="codeblock2 absolute"></div>}
        />
      </div>
    </div>
  );
}

export default ServicesOverview;
