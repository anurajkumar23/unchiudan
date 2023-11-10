import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaWhatsapp,
  } from "react-icons/fa";

export const SocialMedia = ()=>{
    return (
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
    )
}