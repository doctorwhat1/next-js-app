"use client";

import { Person } from "@/models/Person";
import { useRouter } from "next/navigation";

import { Task } from "@/models/Task";

interface TasksTableProps {
  data: Task[];
}


const TasksTable: React.FC<TasksTableProps> = ({ data }) => {
  const router = useRouter();

  const handleEditClick = (id: number) => {
    router.push(`/userview/${id}`); // Redirect to the userview page with the user's ID
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Название</th>
          <th>Дата</th>
          <th>Приоритет</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((task) => (
          <tr key={task.id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img src={'https://cdn-icons-png.flaticon.com/512/4345/4345800.png'} alt={`${task.title} Image`} />
                  
                  </div>
                </div>
                <div>
                  <div className="font-bold">{task.title}</div>
                  <div className="text-sm opacity-50">{task.description}</div>
                </div>
              </div>
            </td>
            <td>
              {task.dueDate}
              <br />
              <span className="badge badge-ghost badge-sm">
                {task.status}
              </span>
            </td>
            <td>{task.priority}</td>
            <th>
              <button
                className="btn btn-ghost btn-xs"
                onClick={() => handleEditClick(task.id)}
              >
                Open to edit
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TasksTable;