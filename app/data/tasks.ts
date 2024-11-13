import { Team } from "@/models/Team";
import { Task } from "@/models/Task";
  
export const tasks: Task[] = [
{
    id: 1,
    title: "Таск 1",
    description: "Описание данного таска",
    createdAt: "13.11.2024",
    dueDate: "14.11.2024",
    assignedUserId: 1,
    teamId: 2,
    status: "В работе",
    priority: "Высокий",
},
{
    id: 2,
    title: "Сделать фронт",
    description: "Добавьте функционал для сайта просмотра команд",
    createdAt: "string",
    dueDate: "01.11.2020",
    assignedUserId: 1,
    teamId: 2,
    status: "Просрочено",
    priority: "Высокий",
},
{
    id: 3,
    title: "Task3",
    description: "string",
    createdAt: "string",
    dueDate: "string",
    assignedUserId: 1,
    teamId: 2,
    status: "string",
    priority: "string",
},
{
    id: 4,
    title: "Task4",
    description: "string",
    createdAt: "string",
    dueDate: "string",
    assignedUserId: 1,
    teamId: 2,
    status: "string",
    priority: "string",
},
];