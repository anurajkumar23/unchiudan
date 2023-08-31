import React from "react";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function BlogsPage() {
  return (
    <div className="mx-6 py-[8rem] ">
      <h1 className="text-center font-bold text-[2rem] md:text-[2.5rem] mb-6 ">
        Current Affairs UPSC title 5
      </h1>
      <div className="mx-6 my-12">
        <img
          alt="meow"
          src="/Images/upsc.jpeg"
          class="w-full mx-auto rounded-lg"
        />
      </div>

      <div className="flex justify-between mt-6 mx-12 ">
        <span className="text-center text-lg ">Share with Friends :</span>
        <span className="flex text-gray-400 justify-center space-x-5">
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
        Monthly Current Affairs of Jun 2020 PDF Download Set no- 5
      </h1>
      <p className="mt-4 text-justify text-lg">
        Monthly Current Affairs of Jun 2020 PDF Download is now out by
        UnchiUdaan.in You can Download it here and Get Daily 10 Questions of
        Latest Current Affairs of Jun 2020 on UnchiUdaan Facebook Page. You can
        also Download other Previous Monthly Current Affairs of Jun 2020 along
        with Current affairs of Jun available in Free Download page of this
        Website. <br /> <br /> This PDF is the Successive Series of Unchiudaan
        Monthly Current affairs PDF of Jun that is Being Issued by Unchi Udaan.
        You can also Download the Previous Month PDF for Free Monthly PDF. You
        can also download other PDFs{" "}
      </p>
      <div className="flex justify-between mt-10 mx-12 ">
        <span className="text-center text-lg ">Share with Friends :</span>
        <span className="flex text-gray-400 justify-center space-x-5">
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
          <div className="flex flex-col justify-center space-y-2 rounded-lg mx-10 border-2 p-3">
            <span className="flex space-x-3 justify-center">
              <span>
                <FaArrowAltCircleLeft className="w-7 h-7" />
              </span>
              <span className="text-lg">Previous Post</span>
            </span>
            <span>UPSC Notes Note Set- 4</span>
          </div>
        </Link>
        <Link to="/">
          <div className="flex flex-col  justify-center rounded-lg space-y-2 mx-10 border-2 p-3">
            <span className="flex space-x-3 justify-center">
              <span className="text-lg">Next Post</span>
              <span>
                <FaArrowAltCircleRight className="w-7 h-7" />
              </span>
            </span>
            <span>UPSC Notes Note Set- 6</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BlogsPage;
