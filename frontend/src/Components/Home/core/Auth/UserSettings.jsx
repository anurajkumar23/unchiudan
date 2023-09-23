import "./usersetting.css";

function UserSettings() {
  const user = {
    role: "admin",
  };

  return (
    <div className="bg-gray-200 p-4 sm:p-8 md:p-16 lg:p-32 flex-1 relative bg-gray-100 py-[4rem]">
      <div className="bg-white max-w-screen-xl mx-auto min-h-screen rounded-3xl overflow-hidden shadow-md flex flex-col sm:flex-row">
        <div className="bg-[#55c57a] sm:w-1/4 p-4">
          <ul className="side-nav">
            <li className="mb-4 text-white font-bold pl-[1.3rem] cursor-pointer">Settings</li>
            <li className="mb-4 text-white font-bold pl-[1.3rem] cursor-pointer">Study Material</li>
            <li className="mb-4 text-white font-bold pl-[1.3rem] cursor-pointer">Billing</li>
            {user.role === "admin" ? (
              <li className="mb-4 text-white font-bold pl-[1.3rem] cursor-pointer">Admin power</li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="sm:w-3/4">
          <div className="user-view__form-container max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
            <h2 className="heading-secondary mt-8 mb-4 text-xl text-[#55c57a]">
              Your account settings
            </h2>
            <form className="">
              <div className="mb-4">
                <label className="block">Name</label>
                <input className="form__input border border-gray-300 p-2 rounded" placeholder="Name" />
              </div>
              <div className="form__group mb-4">
                <label className="block">Email address</label>
                <input className="form__input border border-gray-300 p-2 rounded" placeholder="Email Adress"/>
              </div>
              <div className="form__group mb-4">
                <label className="block">Phone Number</label>
                <input className="form__input border border-gray-300 p-2 rounded" placeholder="Number"/>
              </div>

              <div className="text-right">
                <button className="bg-[#55c57a] text-white px-4 py-2 rounded">
                  Save settings
                </button>
              </div>
            </form>
          </div>
          <hr className="my-8 " />
          <div className="user-view__form-container max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
            <h2 className="mt-8 mb-4 text-xl text-[#55c57a]">Password change</h2>
            <form className="">
              <div className=" mb-4">
                <label className="block">Current Password</label>
                <input className="form__input border border-gray-300 p-2 rounded" placeholder="••••••••"/>
              </div>
              <div className=" mb-4">
                <label className="block">New Password</label>
                <input className="form__input border border-gray-300 p-2 rounded" placeholder="••••••••"/>
              </div>
              <div className=" mb-4">
                <label className="block">Confirm Password</label>
                <input className="form__input border border-gray-300 p-2 rounded" placeholder="••••••••"/>
              </div>
              <div className="text-right">
                <button className="bg-[#55c57a] text-white px-4 py-2 rounded mb-[45px]">
                  Save password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
