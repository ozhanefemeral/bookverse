"use client";

import { BookWithAuthor } from "@/app/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const sortOptions = ["Title", "Author", "Year"];

export default function BookGrid({ books }: { books: BookWithAuthor[] }) {
  const [sort, setSort] = useState(sortOptions[0]);
  const query = new URLSearchParams(location.search);
  const book = query.get("book") || "";

  const sortedBooks = books.sort((a, b) => {
    switch (sort) {
      case "Title":
        return a.title.localeCompare(b.title);
      case "Author":
        return a.authors[0].name.localeCompare(b.authors[0].name);
      case "Year":
        if (a.year && b.year) return a.year - b.year;
      default:
        return 0;
    }
  });

  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <div>
          Found {books.length} book{books.length > 1 ? "s" : ""} matching{" "}
          <span className="font-bold text-primary">{book}</span>.
        </div>
        <div className="flex justify-end items-center">
          Sort By &nbsp;
          <Select value={sort} onValueChange={setSort} defaultValue={sort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedBooks.map((book) => (
          <Card key={book.title} className="flex flex-col gap-2">
            <CardHeader>
              <Image src={book.image} alt={book.title} className="w-full" />
              <CardTitle>{book.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-right">
                {book.authors.map((author) => {
                  return (
                    <Button asChild variant={"link"} key={author.slug}>
                      <Link href={`/authors/${author.slug}`}>
                        {author.name}
                      </Link>
                    </Button>
                  );
                })}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
