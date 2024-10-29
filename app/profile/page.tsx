'use client'

import Topbar from '@/components/Topbar';
import { useRouter } from 'next/navigation';


const Profile = () => {
  const router = useRouter();

  const handleEditProfile = () => {
    router.push('/profile-edit');
  };

  return (
    <div>
      
    <Topbar></Topbar>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt="Profile Picture"
          className="rounded-full w-32 h-32 mx-auto mb-4"
        />
        <h2 className="text-xl font-bold text-center">John Doe</h2>
        <p className="text-gray-600 text-center mb-4">
          A brief description about John Doe goes here.
        </p>
        <button
          onClick={handleEditProfile}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Edit Profile
        </button>
      </div>
    </div>
    </div>
  );
};

export default Profile;