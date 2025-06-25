"use client";

import useAxios from "@/hooks/useAxios";
import type { CreateProjectPayload } from "@/types/project";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

const useUpdateProject = (projectId: string) => {
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: Partial<CreateProjectPayload>) => {
      const { data } = await axiosInstance.put(
        `/projects/${projectId}`,
        payload
      );
      return data;
    },
    onSuccess: () => {
      toast.success("Project updated successfully");
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data.message || "Failed to update project");
    },
  });
};

export default useUpdateProject;
