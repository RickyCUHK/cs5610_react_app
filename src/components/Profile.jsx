import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { LoggedInUserContext } from "../contexts/LoggedInUser";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
  const isLoggedIn = loggedInUser?.username;
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: loggedInUser?.name || '',
    email: loggedInUser?.email || '',
    phone: loggedInUser?.phone || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    loggedInUser.name = formData.name;
    loggedInUser.email = formData.email;
    loggedInUser.phone = formData.phone;
    setEditMode(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Please log in to view your profile.</h2>
        <button
          className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-secondary"
          onClick={() => navigate('/login')}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-md shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Your Profile</h1>

      <div className="flex justify-center mb-6">
        <img
          src={loggedInUser.avatar_url}
          alt="Profile Avatar"
          className="w-24 h-24 rounded-full border"
        />
      </div>

      {editMode ? (
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-secondary"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <p className="px-3 py-2 border rounded-md">{loggedInUser.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <p className="px-3 py-2 border rounded-md">{loggedInUser.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <p className="px-3 py-2 border rounded-md">{loggedInUser.phone}</p>
          </div>
          <div className="mt-5 flex justify-end">
            <button
              className="bg-brand-primary text-white w-full px-4 py-2 rounded-md hover:bg-brand-secondary"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}

        
    <div className="mt-5 text-center">
        <button
          className="bg-brand-primary text-white w-full px-5 py-2 rounded-md hover:bg-brand-secondary"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
