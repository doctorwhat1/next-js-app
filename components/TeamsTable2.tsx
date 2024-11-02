'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchTeams } from '../utils/api';

//export to a model later on.
interface Team {
    id: number;
    name: string;
    description: string;
}

const TeamsTable2: React.FC = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleOpen = (teamId: number) => {
        router.push(`/teamview/${teamId}`);
      };

    useEffect(() => {
        const getTeams = async () => {
            try {
                const data = await fetchTeams();
                setTeams(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            }
        };

        getTeams();
    }, []);

    if (error) return <div>Error: {error}</div>;

    return (
      <table className="table">
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
          {teams.map((team) => (
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
                      <img src='https://cdn.worldvectorlogo.com/logos/it-2.svg' alt={`Avatar of ${team.name}`} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{team.name}</div>
                    <div className="text-sm text-gray-500">{team.description}</div>
                  </div>
                </div>
              </td>
              <td>
                Category
                <br />
                <span className="badge badge-ghost badge-sm">Status</span>
              </td>
              <td>Role</td>
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
  
  export default TeamsTable2;