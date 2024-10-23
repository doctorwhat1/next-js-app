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

import { Person } from "@/models/Person";
import PeopleTable from "@/components/PeopleTable";
import { people } from "../data/people";



const items = [
  { id: 1, title: 'Team 1', status: 'Active', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', status: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', status: 'Design', type: 'Full-time', location: 'Remote' },
]

const page = () => {
  return (
<div>


<Topbar />


<div className="p-20 m-2">


<Card>
  <CardHeader>
    <CardTitle>Пользователи</CardTitle>
    <CardDescription>
      Ваши пользователи? Глобальные пользователи? А фиг его знает.
    </CardDescription>
  </CardHeader>
  <CardContent>

    
  <div className="overflow-x-auto">



  <PeopleTable data={people} />


</div>

  </CardContent>
</Card>




</div>





</div>
  )
}

export default page