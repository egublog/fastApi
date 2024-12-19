"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchResults, setSearchResults] = useState<{
    results: string[];
    duration: number;
  }>();

  useEffect(() => {
    const fetchData = async () => {
      if (!input) return setSearchResults(undefined);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const res = await fetch(`/api/search?q=${input}`);
    };
    fetchData();
  }, [input]);

  return (
    <div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="text-zinc-900"
        type="text"
      />
    </div>
  );
}
