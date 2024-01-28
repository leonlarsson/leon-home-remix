import ProjectsGrid from "~/components/ProjectsGrid";
import projects from "~/data/projects";

export default function Projects() {
  return (
    <div className="mx-auto">
      <div className="flex flex-col space-y-3">
        <div>
          <div className="text-3xl font-extrabold">Projects</div>
          <div className="mb-3">A directory of all my projects.</div>
        </div>

        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
}
