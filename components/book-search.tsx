"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function BookSearch() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const [searchInput, setSearchInput] = useState(title || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // submit form if length is greater equal to 2
    if (searchInput.length >= 2) {
      window.location.href = `/search?title=${searchInput}`;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full max-w-sm items-center space-x-4 py-4">
        <Input
          type="text"
          name="title"
          minLength={2}
          placeholder="Start searching books"
          defaultValue={title || ""}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
