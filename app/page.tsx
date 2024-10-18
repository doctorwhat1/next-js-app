import Image from "next/image";
import Link from 'next/link'
import Sidebar from "@/components/Sidebar";
import Sidebar2 from "@/components/Sidebar2";
import Topbar from "@/components/Topbar";
import Dropdown from "@/components/dropdown";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/card';


export default function Home() {
  return (
    <div>

    <Topbar />


    <div className="p-20 m-2">
    

    <Card>
      <CardHeader>
        <CardTitle>Главная страница</CardTitle>
        <CardDescription>
          Тут пока что я тестирую различные компоненты/дизайны и прочее. В финальной версии тут будет дашборд.
        </CardDescription>
      </CardHeader>
      <CardContent>

      </CardContent>
    </Card>



    <h1><br></br>Text!</h1>
    <h3>Moooore text!!!</h3>

  
    </div>





</div>
  );
}
