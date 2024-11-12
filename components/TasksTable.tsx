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
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
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
                  <div className="font-bold">{task.title}</div>
                  </div>
                </div>
                <div>
                  <div className="font-bold">{task.description}</div>
                  <div className="text-sm opacity-50">{task.dueDate}</div>
                </div>
              </div>
            </td>
            <td>
              {task.status}
              <br />
              <span className="badge badge-ghost badge-sm">
                {task.priority}
              </span>
            </td>
            <td>{task.createdAt}</td>
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