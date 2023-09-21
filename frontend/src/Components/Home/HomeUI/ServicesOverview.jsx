
import {
  FaFileAlt,
  FaUserGraduate,
  FaLanguage,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";


function ServicesOverview() {
  return (
    <div className="mx-auto">
      <h1 className="text-center text-[1.5rem] md:text-[2rem] mb-6 font-semibold">
        Our Services
      </h1>
      <div className="flex flex-wrap items-center">
        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
          <div className="relative flex flex-col min-w-0 break-words bg-pure-greys-5 w-full mb-6  rounded-lg bg-pink-500">
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
              <div className="relative flex flex-col mt-4">
              <Link to="/quiz">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center  w-fit h-fit mb-5 shadow-lg rounded-full bg-white">
                    <FaUserTie className="w-10 h-10" />
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">
                    Daily Quiz / डेली प्रश्न
                  </h6>
                  <p className="mb-4 text-blueGray-500">
                    ऊँची उड़ान Telegram पर डेली 10 Questions अपडेट किये जाते
                    हैं।
                  </p>
                </div>
                </Link>
              </div>
             <Link to="/News">
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center  w-fit h-fit mb-5 shadow-lg rounded-full bg-white">
                    <FaUserGraduate className=" w-10 h-10" />
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">Latest News</h6>
                  <p className="mb-4 text-blueGray-500">
                    Get All Latest News
                  </p>
                </div>
              </div>
              </Link>
            </div>
            <div className="w-full md:w-6/12 px-4">
            <Link to="/Currentaffairs">
              <div className="relative flex flex-col min-w-0 mt-4">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center  w-fit h-fit mb-5 shadow-lg rounded-full bg-white">
                    <FaLanguage className=" w-10 h-10" />
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">कर्रेंट अफेयर्स</h6>
                  <p className="mb-4 text-blueGray-500">
                    कर्रेंट अफेयर्स के Updates से सम्बंधित सभी Questions भी।
                  </p>
                </div>
              </div>
              </Link>
              <Link to="/downloads">
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center  w-fit h-fit mb-5 shadow-lg rounded-full bg-white">
                    <FaFileAlt className=" w-10 h-10" />
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">
                    Monthly PDFs / मासिक PDF
                  </h6>
                  <p className="mb-4 text-blueGray-500">
                    पूरे महीने में अपडेट किये गए प्रश्नों के PDF आपको मासिक तौर
                    पर मिल जायेगा।
                  </p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesOverview;
