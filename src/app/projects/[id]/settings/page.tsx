import ProjectSettingsPage from "@/features/(projects)/projects-settings";

interface ProjectSettingsProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectSettings({
  params,
}: ProjectSettingsProps) {
  const { id } = await params;
  return <ProjectSettingsPage projectId={id} />;
}

