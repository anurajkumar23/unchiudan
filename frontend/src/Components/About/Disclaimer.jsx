

const Disclaimer = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
    <div className='mx-auto py-[4rem]'>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4">अस्वीकरण (Disclaimer)</h1>
        <p className="text-lg mb-6">
          यह अस्वीकरण हमारी वेबसाइट के उपयोग के संबंध में हमारी नीतियों और स्थितियों को व्यक्त करता है:
        </p>
        <h2 className="text-2xl font-semibold mb-2">1. वेबसाइट की सामग्री</h2>
        <p className="text-lg mb-4">
          - हम अपने वेबसाइट पर प्रदर्शित सामग्री की सटीकता और अद्यतनता की गारंटी नहीं देते हैं।
          - हम वेबसाइट पर दी गई सामग्री का उपयोग या आवंटन के बारे में किसी भी प्रकार की जिम्मेदारी नहीं लेते हैं।
        </p>
        <h2 className="text-2xl font-semibold mb-2">2. आपकी जिम्मेदारी</h2>
        <p className="text-lg mb-4">
          - आपको हमारी वेबसाइट का उपयोग करने पर सवधानी और समझदारी से कार्रवाई करनी चाहिए।
          - किसी भी सामग्री का उपयोग करने से पहले, सामग्री की सटीकता और प्रयोग की वैधता की जाँच करें।
        </p>
        <h2 className="text-2xl font-semibold mb-2">3. जुरिसडिक्शन (क्षेत्राधिकार)</h2>
        <p className="text-lg mb-4">
          - इस वेबसाइट के उपयोग से हुई किसी भी विवाद की दोपहर की पुनः जाँच और मिलाप की कोशिश करने का अधिकार हमारे संबंधित न्यायिक अधिकारिक को होगा।
        </p>
        <h2 className="text-2xl font-semibold mb-2">4. संपर्क</h2>
        <p className="text-lg mb-4">
          - किसी भी प्रकार के प्रश्न या सुझाव के लिए हमसे <a href="/contactus" className="text-blue-500 hover:underline">संपर्क</a> करें।
        </p>
      </div>
    </div>
    </div>
  );
};

export default Disclaimer;
