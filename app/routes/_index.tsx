import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

interface Env {
  KV: KVNamespace;
}

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const env = context.env as Env;
  const stats = (await env.KV?.get("STATS", "json")) ?? {
    totalGuilds: 3792,
    totalChannels: 109767,
    totalMembers: 629895,
    totalStatsSent: {
      total: 197555,
      games: {
        "Battlefield 2042": 46303,
        "Battlefield V": 69848,
        "Battlefield 1": 32404,
        "Battlefield Hardline": 1808,
        "Battlefield 4": 36961,
        "Battlefield 3": 5015,
        "Battlefield Bad Company 2": 364,
        "Battlefield 2": 282,
      },
      languages: {
        English: 129743,
        French: 5064,
        Italian: 909,
        German: 4661,
        Spanish: 4066,
        Russian: 4738,
        Polish: 4354,
        "Brazilian Portuguese": 6025,
        Turkish: 1890,
        Swedish: 748,
        Norwegian: 162,
        Finnish: 391,
        Arabic: 196,
      },
    },
    lastUpdated: {
      date: "Sat, 27 Jan 2024 22:43:16 GMT",
      timestampMilliseconds: 1706395396933,
      timestampSeconds: 1706395396,
    },
  };
  return json({ stats });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="p-2">
      <h1 className="text-3xl font-bold">Welcome to Remix + Cloudflare</h1>
      <div className="flex flex-col gap-2 flex-wrap">
        <span>Here is some data directly from Cloudflare KV.</span>
        <code className="whitespace-pre text-sm bg-neutral-800 p-1 rounded text-white h-80 overflow-y-scroll">
          {JSON.stringify(data, null, 2)}
        </code>
      </div>
    </div>
  );
}
