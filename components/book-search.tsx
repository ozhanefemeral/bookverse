"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import CategorySelect from "./category-select";

export default function BookSearch() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const category = decodeURIComponent(searchParams.get("categories") || "");
  const [searchInput, setSearchInput] = useState(title || "");

  const showCategory = location.pathname === "/books";

  return (
    <form action="/books" method="GET">
      <div className="flex w-full flex-col md:flex-row max-w-sm items-center gap-4">
        <Input
          type="text"
          name="title"
          minLength={2}
          placeholder="Start searching books"
          defaultValue={title || ""}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow w-full md:w-auto"
        />
        {showCategory && <CategorySelect category={category} />}
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
