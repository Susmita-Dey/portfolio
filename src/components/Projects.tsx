import { getProjectsData } from "@/lib/sanity";
import { ProjectsCard } from "@/lib/types";
import ProjectGallery from "./ProjectGallery";

export default async function Projects() {
  const data: ProjectsCard[] = await getProjectsData();

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#010119] pt-10">
      <ProjectGallery projects={data} variant="classic" />
    </div>
  );
}
