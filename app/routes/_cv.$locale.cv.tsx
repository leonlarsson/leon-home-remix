import { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { Link, redirect, useParams } from "@remix-run/react";
import { Fragment } from "react";
import { CVLocale } from "types";
import Icons from "~/components/icons";
import { pageMetadata, sections } from "~/data/cv";

export const meta: MetaFunction = ({ params }) => {
  return [
    {
      title: pageMetadata.title[params.locale as CVLocale],
    },
    {
      name: "description",
      content: pageMetadata.description[params.locale as CVLocale],
    },
  ];
};

export const loader: LoaderFunction = ({ params }) => {
  if (params.locale !== "en" && params.locale !== "sv") {
    return redirect("/en/cv");
  }
  return null;
};

export default function CV() {
  const { locale } = useParams();

  return (
    <div className="flex flex-col">
      {/* Language selection */}
      <div className="flex gap-2">
        <Link
          to={"/en/cv"}
          title={"Read the English version"}
          draggable={false}
        >
          {
            <Icons.unitedKingdom
              className="inline size-9"
              data-selected={locale === "en"}
            />
          }
        </Link>
        <Link
          to={"/sv/cv"}
          title={"Read the Swedish version"}
          draggable={false}
        >
          {
            <Icons.sweden
              className="inline size-9"
              data-selected={locale === "sv"}
            />
          }
        </Link>
      </div>

      {/* Render sections based on the sections array in @/data/cv */}
      <div className="flex flex-col gap-6">
        {sections(locale as CVLocale).map((section, i) => (
          <Fragment key={i}>{section}</Fragment>
        ))}
      </div>
    </div>
  );
}
