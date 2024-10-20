'use client'; // This ensures it's a client component for interactivity

import { useParams } from 'next/navigation';
import { teams } from '../../data/teams'; // Adjust path if necessary
import { useEffect, useState } from 'react';

interface Team {
  id: number;
  name: string;
  description: string;
  category: string;
  status: string;
  role: string;
  image: string;
}

const TeamView: React.FC = () => {
  const { id } = useParams(); // Get the team ID from the URL
  const [team, setTeam] = useState<Team | undefined>(undefined);

  // Fetch the team details based on the ID
  useEffect(() => {
    const selectedTeam = teams.find((t) => t.id === Number(id));
    setTeam(selectedTeam);
  }, [id]);

  if (!team) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h2 className="text-2xl font-bold">Team not found</h2>
      </div>
    );
  }

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