import type { User } from "./user";
import type { Project } from "./project";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "todo" | "in-progress" | "done";
  projectId: string;
  assigneeId?: string;
  createdAt: Date;
  updatedAt: Date;
  project?: Project;
  assignee?: User;
}

export interface CreateTaskPayload {
  title: string;
  description?: string;
  projectId: string;
  assigneeId?: string;
}

export interface UpdateTaskPayload {
  title?: string;
  description?: string;
  status?: "todo" | "in-progress" | "done";
  assigneeId?: string;
}
