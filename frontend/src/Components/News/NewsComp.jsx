/* eslint-disable react/prop-types */


function NewsComp({ newsItems }) {
  console.log(newsItems)

  return (
    <div className="flex flex-col justify-center ">
      {newsItems.map((news) => (
        <div
          key={news.id}
          className="relative my-6 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white"
        >
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <img crossOrigin="anonymous" src={`http://localhost:3000/img/news/${news.photo}`} alt="News Image" className="rounded-xl" />
          </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
              
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
