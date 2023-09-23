import React, { useState } from 'react';
import './usersetting.css';
import {
  FaCog,
  FaFilePdf,
  FaStar,
  FaCreditCard,
  FaUser,
  FaUsers,
  FaBriefcase,
} from 'react-icons/fa';

function UserSettings({ user }) {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSaveSettings = () => {
    // Add logic to save user settings
  };

  const handleSavePassword = () => {
    // Add logic to save password
  };

  function navItem(link, text, icon, active) {
    return (
      <li className={`side-nav${active ? ' side-nav--active' : ''}`}>
        <a href={link} className="block py-2 px-4">
          {icon} {/* Use the icon component here */}
          {text}
        </a>
      </li>
    );
  }

  function formGroup(label, id, value, onChange, type = 'text', placeholder = '') {
    return (
      <div className="form__group mb-4">
        <label className="form__label" htmlFor={id}>
          {label}
        </label>
        <input
          type={type}
          id={id}
          className="form__input border border-gray-300 p-2 rounded"
          value={value}
          onChange={onChange}
          required
          name={id}
          placeholder={placeholder}
        />
      </div>
    );
  }

  return (
    <main className="bg-gray-200 p-4 sm:p-8 md:p-16 lg:p-32 flex-1 relative bg-gray-100 py-[4rem]">
      <div className="bg-white max-w-screen-xl mx-auto min-h-screen rounded-3xl overflow-hidden shadow-md flex flex-col sm:flex-row">
        <nav className="user-view__menu sm:w-1/4">
          <ul className="side-nav">
            {navItem('#', 'Settings', <FaCog />, true)}
            {navItem('/pdfs', 'Pdf', <FaFilePdf />)}
            {navItem('#', 'My reviews', <FaStar />)}
            {navItem('#', 'Billing', <FaCreditCard />)}
          </ul>
          {user && user.role === 'admin' && (
            <div className="admin-nav">
              <h5 className="admin-nav__heading">Admin</h5>
              <ul className="side-nav">
                {navItem('#', 'Settings', <FaCog />)}
                {navItem('#', 'Manage users', <FaUsers />)}
                {navItem('#', 'Manage reviews', <FaStar />)}
                {navItem('#', 'Manage bookings', <FaBriefcase />)}
              </ul>
            </div>
          )}
        </nav>
        <div className="user-view__content sm:w-3/4">
          <div className="user-view__form-container max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
            <h2 className="heading-secondary mt-8 mb-4 text-2xl">Your account settings</h2>
            <form className="form form-user-data">
              {formGroup('Name', 'name', name, handleNameChange)}
              {formGroup('Email address', 'email', email, handleEmailChange)}
              <div className="form__group form__photo-upload">
                <img
                  className="form__user-photo w-16 h-16 rounded-full"
                  src={`/img/users/${user?.photo || ''}`}
                  alt="User photo"
                />
                <input
                  type="file"
                  className="form__upload"
                  accept="image/*"
                  id="photo"
                  name="photo"
                />
                <label htmlFor="photo" className="text-blue-500 hover:underline cursor-pointer">
                  Choose a new photo
                </label>
              </div>
              <div className="form__group text-right">
                <button
                  className="btn btn--small btn--green"
                  onClick={handleSaveSettings}
                >
                  Save settings
                </button>
              </div>
            </form>
          </div>
          <hr className="my-8 border-gray-300" />
          <div className="user-view__form-container max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
            <h2 className="heading-secondary mt-8 mb-4 text-2xl">Password change</h2>
            <form className="form form-user-settings">
              {formGroup('Current password', 'password-current', currentPassword, handleCurrentPasswordChange, 'password', '••••••••')}
              {formGroup('New password', 'password', newPassword, handleNewPasswordChange, 'password', '••••••••')}
              {formGroup('Confirm password', 'password-confirm', confirmPassword, handleConfirmPasswordChange, 'password', '••••••••')}
              <div className="form__group text-right">
                <button
                  className="btn btn--small btn--green btn--save-password"
                  onClick={handleSavePassword}
                >
                  Save password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default UserSettings;
