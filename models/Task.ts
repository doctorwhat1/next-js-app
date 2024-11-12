export interface Task {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    dueDate: string;
    assignedUserId: number;
    teamId: number;
    status: string;
    priority: string;
  }