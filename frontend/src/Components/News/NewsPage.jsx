import { Link } from "react-router-dom";

import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function NewsPage() {
  return (
    <>
      <div className=" py-[8rem] ">
        <div className=" mx-6 ">
          <h1 className="text-center font-bold text-[2rem] md:text-[2.5rem] mb-6 ">
            Latest News
          </h1>
          <div className="md:mx-12 my-12">
            <img
              alt="meow"
              src="/Images/upsc.jpeg"
              className="w-full mx-auto rounded-lg"
            />
          </div>
          <div className="flex justify-between mt-6 ">
            <span className="text-center text-md  ">Share with Friends :</span>
            <span className="flex text-gray-400 justify-center space-x-4">
              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaFacebook className="text-blue-500 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaTwitter className="text-blue-400 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaInstagram className="text-pink-500 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-blue-600 w-7 h-7" />
              </a>
              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaWhatsapp className="text-green-500 w-7 h-7" />
              </a>
            </span>
          </div>
          <h1 className="mt-10 text-[1.3rem] font-[550] text-center">
            {affairDetails.topic}
          </h1>
          <p className="mt-4 text-justify text-lg">
            Monthly Current Affairs PDFs are now available on UnchiUdaan.in.
            Stay updated with the latest happenings in various fields such as
            politics, economy, technology, and more. Download your copy today
            and get access to a curated selection of 10 questions related to the
            current affairs of the day, exclusively on the UnchiUdaan Facebook
            Page. <br /> <br /> Stay ahead in your UPSC, SSC, Railway, BPSC
            preparations with our Monthly Current Affairs PDFs, now available on
            UnchiUdaan.in. Dive into a wealth of knowledge covering the latest
            in politics, economy, technology, and more. Download your copy now
            and gain access to a specially curated set of 10 questions, tailored
            to UPSC, SSC, Railway, and BPSC exams, exclusively on the UnchiUdaan
            Facebook Page. In addition to the freshest updates, explore an
            extensive collection of previous monthly current affairs reports,
            all conveniently accessible in the Free Download section of this
            website. Stay informed about the events that hold significance for
            your competitive exams.
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-10 ">
        <span className="text-center text-md ">Share with Friends :</span>
        <span className="flex text-gray-400 justify-center space-x-4">
          <a className=" " href="" target="_blank" rel="noreferrer">
            <FaFacebook className="text-blue-500 w-7 h-7" />
          </a>

          <a className=" " href="" target="_blank" rel="noreferrer">
            <FaTwitter className="text-blue-400 w-7 h-7" />
          </a>

          <a className=" " href="" target="_blank" rel="noreferrer">
            <FaInstagram className="text-pink-500 w-7 h-7" />
          </a>

          <a className=" " href="" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-blue-600 w-7 h-7" />
          </a>
          <a className=" " href="" target="_blank" rel="noreferrer">
            <FaWhatsapp className="text-green-500 w-7 h-7" />
          </a>
        </span>
      </div>

      <div className="w-full  flex justify-between mt-8">
        <Link to="/">
          <div className="flex flex-col mx-1 justify-center space-y-2 rounded-lg md:mx-10 border-2 p-2">
            <span className="flex space-x-3 justify-center">
              <span>
                <FaArrowAltCircleLeft className="w-7 h-7" />
              </span>
              <span className="text-lg">Previous News</span>
            </span>
            <span>News 4</span>
          </div>
        </Link>
        <Link to="/">
          <div className="flex flex-col  justify-center mx-1 rounded-lg space-y-2  md:mx-10 border-2 p-2">
            <span className="flex space-x-3 justify-center">
              <span className="text-lg">Next News</span>
              <span>
                <FaArrowAltCircleRight className="w-7 h-7" />
              </span>
            </span>
            <span>News 6</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default NewsPage;
