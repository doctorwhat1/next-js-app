'use client'
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { fetchTeamByID } from '../../../utils/api'

//not used right now
interface Team {
  id: number;
  name: string;
  description: string;
}

const TeamView: React.FC = () => {
    const { id } = useParams(); // Get the team ID from the URL parameters
    const [team, setTeam] = useState<any>(null); 
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getTeam = async () => {
            if (id) {
                try {
                    const data = await fetchTeamByID(Number(id));
                    setTeam(data);
                } catch (err) {
                  setError(err instanceof Error ? err.message : 'An error occurred');
                }
            }
        };

        getTeam();
    }, [id]);

    if (error) return <div>Error: {error}</div>;
    if (!team) return <div>Loading...</div>; // Loading state while fetching

    return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-12">
        {/* Avatar Section */}
        <div className="avatar">
          <div className="mask mask-squircle h-48 w-48">
            <img src={team.image} alt={`${team.name} Avatar`} />
          </div>
        </div>

        {/* Team Info Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-bold mb-2">{team.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{team.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xl font-semibold">Category</h2>
              <p className="text-gray-500">{team.category}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Status</h2>
              <p className={`badge ${team.status === 'Активная' ? 'badge-success' : 'badge-warning'}`}>
                {team.status}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Role</h2>
              <p className="text-gray-500">{team.role}</p>
            </div>
          </div>

          <button
            className="mt-6 btn btn-primary"
            onClick={() => history.back()}
          >
            Назад
          </button>
        </div>
      </div>
    </div>
    );
};

export default TeamView;