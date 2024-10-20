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


const page = () => {

  


  
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




    
  <div className="overflow-x-auto">
  <TeamsTable data={teams} />
</div>

  </CardContent>
</Card>




</div>





</div>
  )
}

export default page