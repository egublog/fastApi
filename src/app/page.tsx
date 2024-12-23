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
    <main className="h-screen w-screen grainy">
      <div className="flex flex-col gap-6 items-center pt-32 duration-500 animate-in animate fade-in-5 slide-in-from-bottom-2.5">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="text-zinc-900"
          type="text"
        />
      </div>
    </main>
  );
}
