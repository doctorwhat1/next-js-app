'use client'
import Topbar from "@/components/Topbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/card';

import TeamsTable2 from "@/components/TeamsTable2";

import { teams } from "../data/teams";
import { useState, useEffect } from "react";
import { Team } from "@/models/Team";
import CreateTeamModal from "@/components/CreateTeamModal";
import router from "next/router";
import CreateTeamModal2 from "@/components/CreateTeamModal2";


function useTeamsManager(initialData: Team[]) {
  const [teams2, setTeams] = useState<Team[]>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSaveTeam = () => {
    //const handleSaveTeam = (newTeam: Team) => {
    //setTeams((prevTeams) => [...prevTeams, newTeam]);

    
  };

  return {
    teams2,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleSaveTeam,
  };
}


const Page: React.FC = () => {
    const {
      teams2,
      isModalOpen,
      handleOpenModal,
      handleCloseModal,
      handleSaveTeam,
    } = useTeamsManager(teams);




  return (
<>

<div className="relative z-50">
    <Topbar />
</div>


<div className="p-20 m-2">


<Card>
  <CardHeader>
    <CardTitle>Ваши команды</CardTitle>
    <CardDescription>
      Команды, в которых вы состоите.
    </CardDescription>
  </CardHeader>
  <CardContent>


  <button className="btn btn-primary mb-4" onClick={handleOpenModal}>
        Create Team
      </button>
      <CreateTeamModal2
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTeam}
      />




    
  <div className="overflow-x-auto">
    <TeamsTable2 />
  </div>

  </CardContent>
</Card>




</div>





</>
  )
}

export default Page