/* eslint-disable react/no-unescaped-entities */


const ErrorPage = () => {
    return (
      <section className="bg-white py-[7rem] px-4 sm:px-6 md:px-8 font-arvo">
        <div className="container mx-auto">
          <div className="text-center">
            <div
              className="bg-cover bg-center h-80 sm:h-96 sm:w-80 md:w-full"
              style={{ backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)' }}
            >
              <h1 className="text-5xl sm:text-4xl text-center text-black">401</h1>
            </div>
            <div className="mt-5">
              <h3 className="text-2xl sm:text-4xl font-bold">Looks like you're lost</h3>
              <p className="text-sm sm:text-base">Sorry, You are not authorized to perform this action!</p>
              <a href="/" className="inline-block mt-4 sm:mt-6 py-2 px-4 sm:py-2 sm:px-4 bg-green-500 text-white rounded">
                Go to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ErrorPage;
  