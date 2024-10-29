'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const EditProfile = () => {
  const router = useRouter();
  const [name, setName] = useState('John Doe');
  const [description, setDescription] = useState('A brief description about John Doe goes here.');
  const [profilePictureUrl, setProfilePictureUrl] = useState('https://via.placeholder.com/150');

  const handleSave = () => {
    // Logic to save the profile data can be added here
    router.push('/profile');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold text-center mb-4">Edit Profile</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded w-full p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded w-full p-2"
            rows={3}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Profile Picture URL</label>
          <input
            type="text"
            value={profilePictureUrl}
            onChange={(e) => setProfilePictureUrl(e.target.value)}
            className="border rounded w-full p-2"
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfile;