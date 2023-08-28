import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            सारे Updates पाने के लिए Subscribe करें
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                {" "}
                Email{" "}
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="example@gmail.com"
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
              Unchiudaan शिक्षा से संबंधित अनुभवी युवाओं की समर्पित टीम है जो
              Website और Facebook page के माध्यम से प्रतियोगी परीक्षाओं की
              तैयारी कर रहे विद्यार्थियों को समसामयिक विषयों पर आधारित
              महत्वपूर्ण Study Material उपलब्ध कराता है।
            </p>

            <div className="mt-6 flex justify-center gap-6 lg:justify-start">
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>

                <FaFacebook className=" w-7 h-7" />
              </a>

              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>

                <FaTwitter className=" w-7 h-7" />
              </a>

              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>

                <FaInstagram className=" w-7 h-7" />
              </a>

              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Linkedin </span>

                <FaLinkedin className=" w-7 h-7" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-gray-900"> Services </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    UPSC
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    BPSC
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    SSC
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Jee Advance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> About </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Our Teachers
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    meow
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Our Tech Team
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Support </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    meow
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8 text-center">
          <p className=" text-lg text-black">
            © ऊँची उड़ान 2023. All rights reserved.
          </p>
          <p>
            Designed & Developed by {""}
            <a href="/DevTeam" className="text-blue-500">
              UIT Meow Coders
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
