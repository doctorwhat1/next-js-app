"use client"; // client-side

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { people } from "../../data/people"; // change to bd later on
import { Person } from "../../../models/Person";

const UserView: React.FC = () => {
  const router = useRouter();
  const { id } = useParams(); 
  const [user, setUser] = useState<Person | undefined>(undefined);

  
  useEffect(() => {
    const foundUser = people.find((person) => person.id === Number(id));
    setUser(foundUser);
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (user) {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const handleSave = () => {
    console.log("User data saved:", user);
    router.push("/");
  };

  if (!user) {
    return <p>User not found...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Edit User: {user.name}</h1>
      <form className="space-y-4">
        <div>
          <label className="block font-semibold">Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Country:</label>
          <input
            type="text"
            name="country"
            value={user.country}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Job:</label>
          <input
            type="text"
            name="job"
            value={user.job}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Favorite Color:</label>
          <input
            type="text"
            name="favoriteColor"
            value={user.favoriteColor}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default UserView;