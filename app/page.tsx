"use client"
import Topbar from "@/components/Topbar";
import RadialChart from "@/components/RadialChart";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/card';
import { DarkThemeToggle } from "flowbite-react";
import DarkModeButton from "@/components/DarkModeButton";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "next-themes";
import MyChart from "@/components/MyChart";


export default function Home() {
  return (
    <div>
    
    <div className="relative z-50">
      <Topbar />
    </div>


    <div className="p-20 m-2">
    

    <Card>
      <CardHeader>
        <CardTitle>Главная страница</CardTitle>
        <CardDescription>
          В финальной версии тут будет дашборд с аналитикой ваших команд  и аналитикой ваших выполненных задач.
        </CardDescription>
      </CardHeader>
      <CardContent>

    <div className="z-10">
      <div>
        Аналитика выполненных задач в команде 1 / всех ваших задач.
      </div>
      
    </div>
    <div className="w-[40%]">
      <MyChart />
    </div>

      </CardContent>
    </Card>



    {/* <h1><br></br>Text!</h1>
    <h3>Moooore text!!!</h3> */}

  
    </div>





</div>
  );
}
