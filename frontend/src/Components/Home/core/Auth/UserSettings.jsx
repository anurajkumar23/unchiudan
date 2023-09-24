/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiLock } from 'react-icons/fi';
import axios from 'axios'; 



function UserSettings({ userData }) {
  const [settingsData, setSettingsData] = useState({
    name: `${userData.firstname} ${userData.lastname}`,
    email: userData.email,
    phone: userData.phone,
    role:userData.role
  });
  

  const handleSettingsChange = (e) => {
    const { name, value } = e.target;
    setSettingsData({
      ...settingsData,
      [name]: value,
    });
  };

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    console.log("🚀 ~ file: UserSettings.jsx:28 ~ getCookie ~ value:", value)
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  const authToken = getCookie('jwt');
  console.log("🚀 ~ file: UserSettings.jsx:30 ~ UserSettings ~ authToken:", authToken)

  const handleSaveSettings = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch('https://unchiudaanteam.vercel.app/api/user/updateMe', settingsData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}` // Replace YOUR_AUTH_TOKEN_HERE with the actual token
        },
      });

      if (response.status === 200) {
        console.log('Settings updated successfully');
      } else {
        console.error('Error updating settings:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };


  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value,
    });
  };

  const handleSavePassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('https://unchiudaanteam.vercel.app/api/user/updatePassword', passwordData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Password updated successfully');
      } else {
        console.error('Error updating password:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  return (
    <div className="bg-gray-200 p-4 sm:p-8 md:p-16 lg:p-32 flex-1 relative bg-gray-100 py-[4rem]">
      <div className="bg-white max-w-screen-xl mx-auto min-h-screen rounded-3xl overflow-hidden shadow-md flex flex-col sm:flex-row">
        <div className="bg-[#55c57a] sm:w-1/4 p-4">
          <ul className="side-nav">
            <li className="mb-4 text-white font-bold pl-[1.3rem] cursor-pointer">Settings</li>
            <li className="mb-4 text-white font-bold pl-[1.3rem] cursor-pointer">Study Material</li>
            <li className="mb-4 text-white font-bold pl-[1.3rem] cursor-pointer">Billing</li>
            {settingsData.role==="admin" ? (
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
            <form onSubmit={handleSaveSettings}>
              <div className="mb-4">
                <label className="block">Name</label>
                <div className="flex items-center">
                  <FiUser className="text-gray-400 mr-2" />
                  <input
                    className="form__input border border-gray-300 p-2 rounded"
                    placeholder="Name"
                    name="name"
                    value={settingsData.name}
                    onChange={handleSettingsChange}
                  />
                </div>
              </div>
              <div className="form__group mb-4">
                <label className="block">Email address</label>
                <div className="flex items-center">
                  <FiMail className="text-gray-400 mr-2" />
                  <input
                    className="form__input border border-gray-300 p-2 rounded"
                    placeholder="Email Address"
                    name="email"
                    value={settingsData.email}
                    onChange={handleSettingsChange}
                  />
                </div>
              </div>
              <div className="form__group mb-4">
                <label className="block">Phone Number</label>
                <div className="flex items-center">
                  <FiPhone className="text-gray-400 mr-2" />
                  <input
                    className="form__input border border-gray-300 p-2 rounded"
                    placeholder="Number"
                    
                    name="phone"
                    value={settingsData.phone}
                    onChange={handleSettingsChange}
                  />
                </div>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-[#55c57a] hover:bg-[#449d66] text-white px-4 py-2 rounded transition duration-300 ease-in-out "
                >
                  Save settings
                </button>
              </div>
            </form>
          </div>
          <hr className="my-8 " />
          <div className="user-view__form-container max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
            <h2 className="mt-8 mb-4 text-xl text-[#55c57a]">Password change</h2>
            <form onSubmit={handleSavePassword}>
              <div className="mb-4">
                <label className="block">Current Password</label>
                <div className="flex items-center">
                  <FiLock className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    className="form__input border border-gray-300 p-2 rounded"
                    placeholder="••••••••"
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block">New Password</label>
                <div className="flex items-center">
                  <FiLock className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    className="form__input border border-gray-300 p-2 rounded"
                    placeholder="••••••••"
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block">Confirm Password</label>
                <div className="flex items-center">
                  <FiLock className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    className="form__input border border-gray-300 p-2 rounded"
                    placeholder="••••••••"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-[#55c57a] hover:bg-[#449d66] text-white px-4 py-2 rounded transition duration-300 ease-in-out mb-[45px]"
                >
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
