import { MetaFunction } from "@remix-run/cloudflare";
import { useSearchParams } from "@remix-run/react";
import ProjectsGrid from "~/components/ProjectsGrid";
import Search from "~/components/Search";
import SortCheckbox from "~/components/SortCheckbox";
import projectsData from "~/data/projects";

export const meta: MetaFunction = ({ location }) => {
  const search = new URLSearchParams(location.search).get("search");
  return [
    {
      title: `Projects${
        search ? ` matching "${search}"` : ""
      } | Leon San José Larsson`,
    },
    {
      name: "description",
      content: search
        ? `Leon's projects matching "${search}".`
        : "Browse all of Leon's projects.",
    },
  ];
};

export default function Projects() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const sortParam = searchParams.get("sort");

  // Most nauseating code I've ever written
  const projects = search
    ? projectsData.filter(project =>
        [
          project.slug,
          ...(project.slugAliases ?? []),
          project.name,
          ...(typeof project.description === "string"
            ? [project.description]
            : project.description),
          project.shortDescription,
          project.year,
          project.link?.replace("https://", ""),
          ...(project.tags ?? []),
        ].some(item => item?.toLowerCase().includes(search?.toLowerCase()))
      )
    : projectsData;

  return (
    <div className="mx-auto">
      <div className="flex flex-col space-y-3">
        <div>
          <div className="text-3xl font-extrabold">Projects</div>
          <div className="mb-3">A directory of all my projects.</div>
        </div>

        <div className="mx-auto w-full space-y-1 transition-all md:w-80">
          <Search />
          <SortCheckbox />
        </div>

        {search && (
          <span
            className={!projects.length ? "text-red-500 dark:text-red-400" : ""}
          >
            {projects.length || "No"}{" "}
            {projects.length === 1 ? "project" : "projects"} matching{" "}
            <span className="rounded bg-black p-1 font-semibold text-white dark:bg-kinda-white dark:text-kinda-black">
              {search}
            </span>
          </span>
        )}

        <ProjectsGrid
          projects={sortParam === "newest" ? [...projects].reverse() : projects}
        />
      </div>
    </div>
  );
}
