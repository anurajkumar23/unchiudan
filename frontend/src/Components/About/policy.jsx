const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="mx-auto py-[4rem]">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-4">
            गोपनीयता नीति (Privacy Policy)
          </h1>
          <p className="text-lg mb-6">
            यह गोपनीयता नीति हमारी वेबसाइट के उपयोग के संबंध में हमारी नीतियों
            को व्यक्त करती है:
          </p>
          <h2 className="text-2xl font-semibold mb-2">
            1. हमारी संग्रहण और उपयोग
          </h2>
          <p className="text-lg mb-4">
            - हम आपकी व्यक्तिगत जानकारी को केवल वेबसाइट की तरफ से प्राप्त करने
            और वेबसाइट की सेवाओं के लिए उपयोग करने के उद्देश्य से संग्रहित करते
            हैं। - हम आपकी जानकारी को तिहरी नहीं करते हैं और उसका दुरुपयोग नहीं
            करते हैं।
          </p>
          <h2 className="text-2xl font-semibold mb-2">
            2. साझा किया गया जानकारी
          </h2>
          <p className="text-lg mb-4">
            - हम आपकी जानकारी को किसी भी तीसरे पक्ष के साथ साझा नहीं करते हैं,
            बिना आपकी अनुमति के। - लेकिन, किसी सामाजिक साझा बटन का उपयोग करके आप
            हमारी सामग्री को साझा कर सकते हैं।
          </p>
          <h2 className="text-2xl font-semibold mb-2">3. सुरक्षा</h2>
          <p className="text-lg mb-4">
            - हम आपकी जानकारी की सुरक्षा के लिए सख्त उपायों का अनुसरण करते हैं,
            लेकिन हम किसी भी तरह की गारंटी नहीं देते हैं। - वेबसाइट के उपयोग से
            हुई किसी भी गुमराही के लिए हम जिम्मेदार नहीं होंगे।
          </p>
          <h2 className="text-2xl font-semibold mb-2">4. संपर्क</h2>
          <p className="text-lg mb-4">
            - किसी भी प्रकार के प्रश्न या सुझाव के लिए हमसे{" "}
            <a href="/contactus" className="text-blue-500 hover:underline">
              संपर्क
            </a>{" "}
            करें।
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
