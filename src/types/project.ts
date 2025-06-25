import { Task } from "./task";
import type { User } from "./user";

export interface Project {
  id: string;
  title: string;
  description?: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
  owner?: User;
  members?: ProjectMember[];
  tasks?: Task[];
  _count?: {
    tasks: number;
    members: number;
  };
}

export interface ProjectMember {
  id: string;
  projectId: string;
  userId: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
  project?: Project;
}

export interface CreateProjectPayload {
  title: string;
  description?: string;
}

export interface InviteMemberPayload {
  email: string;
  projectId: string;
}
