import { profanity } from "@2toad/profanity";
// import EntriesDisplaySettings from "./EntriesDisplaySettings";
// import ButtonActionRow from "./ButtonActionRow";
// import EntryTimestamp from "./EntryTimestamp";
// import { getEntries, getEntriesCount } from "../lib/actions";
import { Entry } from "types";

type PageProps = { entries: Entry[] };

export default function Entries({ entries }: PageProps) {
  return (
    <section className="flex flex-col text-start">
      <div className="flex flex-col gap-1">
        <EntriesList entries={entries} />
      </div>
    </section>
  );
}

const EntriesList = ({ entries }: { entries: Entry[] }) => {
  if (!entries)
    return (
      <span className="text-red-500 dark:text-red-400">
        Failed to get entries.
      </span>
    );

  if (!entries.length)
    return <span>Awaiting entries... Be the first one!</span>;

  return entries.map(entry => (
    <div
      key={entry.id}
      className="break-all rounded-r border-l-2 border-transparent p-1 text-sm hover:border-l-black hover:bg-gray-300 dark:hover:border-l-white dark:hover:bg-gray-300/10"
    >
      <span
        className={
          entry.name
            ? "text-neutral-700 dark:text-neutral-400"
            : "italic text-neutral-700 dark:text-neutral-400"
        }
        title={entry.date.toLocaleString()}
      >
        {entry.name ?? "Anonymous"}:
      </span>{" "}
      <span>{profanity.censor(entry.body.replace(/\s+/g, " "))}</span>
      {entry.edited_at && (
        <span
          className="ms-1 select-none break-normal text-xs text-neutral-600 dark:text-neutral-400"
          title={`Edited ${entry.edited_at.toLocaleString()}`}
        >
          (edited)
        </span>
      )}
    </div>
  ));
};
