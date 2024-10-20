'use client'
import Image from "next/image";
import Link from 'next/link'
import Sidebar from "@/components/Sidebar";
import Sidebar2 from "@/components/Sidebar2";
import Topbar from "@/components/Topbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/card';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table
} from '@/components/table';
import Dropdown from "@/components/dropdown";

import TeamsTable from "@/components/TeamsTable";

import { teams } from "../data/teams";
import { useState } from "react";
import { Team } from "@/models/Team";
import CreateTeamModal from "@/components/CreateTeamModal";


function useTeamsManager(initialData: Team[]) {
  const [teams2, setTeams] = useState<Team[]>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSaveTeam = (newTeam: Team) => {
    setTeams((prevTeams) => [...prevTeams, newTeam]);
  };

  return {
    teams2,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleSaveTeam,
  };
}



const page: React.FC = () => {

    const {
      teams2,
      isModalOpen,
      handleOpenModal,
      handleCloseModal,
      handleSaveTeam,
    } = useTeamsManager(teams);



  return (
<div>


<Topbar />


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
      <CreateTeamModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTeam}
      />




    
  <div className="overflow-x-auto">
  <TeamsTable data={teams2} />
</div>

  </CardContent>
</Card>




</div>





</div>
  )
}

export default page