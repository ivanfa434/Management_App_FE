"use client";

import useAxios from "@/hooks/useAxios";
import type { UpdateTaskPayload } from "@/types/task";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

const useUpdateTask = (projectId?: string) => {
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      ...payload
    }: UpdateTaskPayload & { id: string }) => {
      const { data } = await axiosInstance.patch(`/tasks/${id}`, payload);
      return data;
    },
    onSuccess: (_, variables) => {
      toast.success("Task updated successfully");
      if (projectId) {
        queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      }
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data.message || "Failed to update task");
    },
  });
};

export default useUpdateTask;
