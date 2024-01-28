import { useSearchParams } from "@remix-run/react";
import GradientBorder from "./GradientBorder";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <GradientBorder rounded="rounded-[5px]" padding="p-px">
      <input
        type="search"
        maxLength={20}
        placeholder="Name, description, year, tags..."
        className="text-input-base w-full"
        value={searchParams.get("search") ?? ""}
        onChange={e => {
          const value = e.target.value;
          // If value is not empty, set searchParam. Otherwise, remove the searchParam. Then replace the URL params
          value.trim().length
            ? searchParams.set("search", value)
            : searchParams.delete("search");
          setSearchParams(searchParams);
        }}
      />
    </GradientBorder>
  );
}
