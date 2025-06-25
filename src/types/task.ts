import type { User } from "./user";
import type { Project } from "./project";

// FIX: Update status type untuk sesuai dengan enum di Prisma
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "TODO" | "IN_PROGRESS" | "DONE"; // Sesuai dengan enum TaskStatus di Prisma
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
  status?: "TODO" | "IN_PROGRESS" | "DONE"; // Sesuai dengan enum TaskStatus di Prisma
  assigneeId?: string;
}

// Optional: Buat enum untuk konsistensi
export enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

// Type helper untuk validasi
export type TaskStatusType = keyof typeof TaskStatus;
