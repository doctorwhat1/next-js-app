"use client";

import { Person } from "@/models/Person";
import { useRouter } from "next/navigation";

interface PeopleTableProps {
  data: Person[];
}


const PeopleTable: React.FC<PeopleTableProps> = ({ data }) => {
  const router = useRouter();

  const handleEditClick = (id: number) => {
    router.push(`/userview/${id}`); // redirect to the userview page with the user's ID
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((person) => (
          <tr key={person.id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img src={person.avatar} alt={`${person.name} Avatar`} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{person.name}</div>
                  <div className="text-sm opacity-50">{person.country}</div>
                </div>
              </div>
            </td>
            <td>
              {person.job}
              <br />
              <span className="badge badge-ghost badge-sm">
                {person.jobTitle}
              </span>
            </td>
            <td>{person.favoriteColor}</td>
            <th>
              <button
                className="btn btn-ghost btn-xs"
                onClick={() => handleEditClick(person.id)}
              >
                Open to edit
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PeopleTable;