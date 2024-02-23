import { Link } from "@remix-run/react";
import Icons from "~/components/icons";
import SectionTitle from "../SectionTitle";
import SectionDescription from "../SectionDescription";
import { CVLocale, CVProjectsSection } from "types";

export const ProjectsSection = ({
  data,
  locale,
}: {
  data: CVProjectsSection;
  locale: CVLocale;
}) => {
  if (!data.projects.length) return null;

  return (
    <div className="flex flex-col gap-2">
      <SectionTitle
        title={data.sectionTitle[locale]}
        url={data.sectionTitleUrl}
      />
      <SectionDescription description={data.sectionDescription?.[locale]} />

      <div className="flex flex-col gap-2">
        {data.projects.map(({ name, shortDescription, slug, tags, year }) => (
          <div
            key={slug}
            className="flex flex-col gap-[2px] rounded-lg border border-neutral-200 p-2 transition-colors hover:border-neutral-400"
          >
            <div className="flex items-baseline justify-between">
              <Link
                to={`/projects/${slug}`}
                target="_blank"
                rel="noreferrer"
                className="link font-semibold"
              >
                {name}
              </Link>

              <span className="text-xs text-neutral-600">{year}</span>
            </div>

            <p className="font-geist-mono text-xs text-neutral-600">
              {shortDescription}
            </p>

            <div className="flex flex-wrap gap-1">
              {tags
                ?.sort((a, b) => a.localeCompare(b))
                .map(tag => (
                  <Link
                    key={tag}
                    to={`/projects?search=${tag}`}
                    target="_blank"
                    rel="noreferrer"
                    title={`See other projects tagged with ${tag}.`}
                    className="font-geist-mono rounded bg-neutral-200 p-1 text-xs text-neutral-800 outline-1 hover:outline"
                  >
                    {tag}
                  </Link>
                ))}
            </div>
          </div>
        ))}

        <Link
          to="/projects"
          target="_blank"
          rel="noreferrer"
          className="group font-semibold"
        >
          <Icons.arrowRight className="inline" />{" "}
          <span className="group-hover:underline">
            {data.browseAllText[locale]}
          </span>
        </Link>
      </div>
    </div>
  );
};
