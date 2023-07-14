"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function BookSearch() {
  return (
    <form action="/books" method="GET">
      <div className="flex w-full max-w-sm items-center space-x-4 py-4">
        <Input
          type="text"
          name="book"
          minLength={3}
          placeholder="Start searching books"
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
