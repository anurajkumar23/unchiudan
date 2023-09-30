
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      
        <div className="text-center">
          <h1 className="text-3xl font-extrabold mb-4">
          हमारे बारे में (About Us)
          </h1>
          <p className="text-lg mb-6 px-6">
          <span className="text-pink-300 font-semibold">ऊँची उड़ान</span> एक स्मार्ट और शिक्षाप्रद स्रोत है जो आपको सबसे हाल के और महत्वपूर्ण घटनाओं, क्विज, समाचार/ब्लॉग लेखों, और पीडीएफ प्रारूप की पढ़ाई करने में मदद करता है।

            हम युवाओं को प्रतियोगिता परीक्षाओं के लिए तैयार करने के लिए प्रतिबद्ध हैं और उनके स्वर्णिम भविष्य का समर्थन करते हैं। हम सबसे नवाचारिक और महत्वपूर्ण सामग्री प्रदान करते हैं ताकि आप अपने लक्ष्यों की प्राप्ति में सफल हो सकें।
          </p>
          <div className="flex space-x-6 justify-center">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-blue-800 hover:text-blue-900 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:example@email.com"
              className="text-gray-300 hover:text-gray-400 transition duration-300"
            >
              <FaEnvelope className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    
  );
};

export default AboutUs;
