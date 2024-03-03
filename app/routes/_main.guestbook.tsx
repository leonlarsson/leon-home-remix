import { Await, useLoaderData } from "@remix-run/react";
import { defer } from "@remix-run/cloudflare";
import { and, desc, isNotNull, isNull } from "drizzle-orm";
import { db } from "lib/db";
import { guestbookEntries } from "lib/db/schema";
import { Suspense } from "react";
import Entries from "~/components/Entries";

export const loader = async () => {
  const namedEntriesOnly = false;
  const entries = db
    .select()
    .from(guestbookEntries)
    .where(
      and(
        namedEntriesOnly ? isNotNull(guestbookEntries.name) : undefined,
        isNull(guestbookEntries.deleted_at),
      ),
    )
    .orderBy(desc(guestbookEntries.date))
    .limit(100)
    .execute();

  return defer({
    entries,
  });
};

export default function Guestbook() {
  const { entries } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Guestbook</h1>
      <p>This is the guestbook page</p>
      <Suspense fallback={"SUSPENSE"}>
        <Await resolve={entries}>
          {/* @ts-expect-error the loader transforms Date -> string */}
          {entries => <Entries entries={entries} />}
        </Await>
      </Suspense>
    </div>
  );
}
