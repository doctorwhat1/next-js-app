'use client'
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { fetchTeamByID } from '../../../utils/api'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/card';
import Topbar from '@/components/Topbar';
import PeopleTable from '@/components/PeopleTable';
import { people } from '@/app/data/people';
import TasksTable from '@/components/TasksTable';
import { tasks } from '@/app/data/tasks';

//not used right now
// interface Team {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
// }

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
      <>
        <div className="relative z-50">
          <Topbar />
        </div>

        <div className="p-20 pb-2 m-2">

          <Card>
            <CardHeader>
              <CardTitle>Основная информация</CardTitle>
              <CardDescription>
                Информация о данной команде и вашей роли в ней.
              </CardDescription>
            </CardHeader>
            <CardContent>

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
                        <p className="text-gray-500">{team.type}</p>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold">Status</h2>
                        <p className={`badge ${team.status === 'ACTIVE' ? 'badge-success' : 'badge-warning'}`}>
                          {team.status}
                        </p>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold">Your Role</h2>
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

            </CardContent>
          </Card>
        </div>

<div className="pl-20 pr-20 m-2">

<Card>
  <CardHeader>
    <CardTitle>Таски</CardTitle>
    <CardDescription>
      Рабочие задачи, поставленные Вам в команде
    </CardDescription>
  </CardHeader>
  <CardContent>
  <TasksTable data={tasks}/>


  </CardContent>
</Card>
</div>

<div className="pl-20 pr-20 m-2">

<Card>
  <CardHeader>
    <CardTitle>Участники</CardTitle>
    <CardDescription>
      Пользователи, состоящие в команде.
    </CardDescription>
  </CardHeader>
  <CardContent>
  <PeopleTable data={people}/>


  </CardContent>
</Card>
</div>
      </>
    );
};

export default TeamView;