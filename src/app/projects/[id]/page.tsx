import { ProjectPage } from "@/features/(projects)/projects";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Project({ params }: ProjectPageProps) {
  const { id } = await params;
  return <ProjectPage projectId={id} />;
}
