'use client';
import React from 'react';

import { Team } from "@/models/Team";
import { useRouter } from "next/navigation";

interface TeamsTableProps {
  data: Team[];
}

const TeamsTable: React.FC<TeamsTableProps> = ({ data }) => {
    const router = useRouter();
  
    const handleOpen = (teamId: number) => {
      router.push(`/teamview/${teamId}`);
    };
  
    return (
      <table className="table2">
        <thead>
          <tr>
            <th></th>
            <th>Название</th>
            <th>Тип</th>
            <th>Ваша роль</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((team) => (
            <tr key={team.id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={team.image} alt={`Avatar of ${team.name}`} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{team.name}</div>
                    <div className="text-sm text-gray-500">{team.description}</div>
                  </div>
                </div>
              </td>
              <td>
                {team.category}
                <br />
                <span className="badge badge-ghost badge-sm">{team.status}</span>
              </td>
              <td>{team.role}</td>
              <th>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleOpen(team.id)}
                >
                  Открыть
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default TeamsTable;