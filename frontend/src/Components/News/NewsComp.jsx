

function NewsComp({ newsItems }) {
  const isNew = (uploadDate) => {
    const currentTime = new Date();
    const uploadTime = new Date(uploadDate);
    const timeDifference = (currentTime - uploadTime) / (1000 * 60);
    return timeDifference < 30;
  };

  return (
    <div className="flex flex-col justify-center">
      {newsItems.map((news) => (
        <div
          key={news.id}
          className="relative my-6 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white"
        >
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <img src={`news.photo`} alt="News Image" className="rounded-xl" />
          </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
              <div className="bg-gray-200 px-3 py-1 rounded-full text-xs flex font-medium text-gray-800 space-x-3">
                <span>
                  <FaRegClock className="w-6 h-6" />
                </span>
                <span>
                  {isNew(news.date)
                    ? "NEW"
                    : new Date(news.date).toLocaleString()}
                </span>
              </div>
            </div>
            <h3 className="font-black text-gray-800 md:text-3xl text-xl">
              {news.heading}
            </h3>
            <p className="md:text-lg text-gray-500 text-base">{news.article}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsComp;
