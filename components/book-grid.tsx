"use client";

import {
  Card,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { SearchResult } from "@/app/types";

export default function BookGrid({
  searchResults,
}: {
  searchResults: SearchResult;
}) {
  const {
    results: books,
    total_results: totalResults,
    total_pages: totalPages,
  } = searchResults;

  const isEmpty = books.length === 0;

  return (
    <div className="p-4">
      {isEmpty && (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center">
            Looks like there are no books here 😿
          </h1>
          <p className="text-center">
            Try searching for something else or check back later.
          </p>
        </div>
      )}
      {!isEmpty && (
        <>
          <div className="flex items-center py-4">
            Found
            <span className="font-bold text-primary">
              &nbsp;{totalResults}&nbsp;
            </span>
            book{totalResults > 1 ? "s" : ""}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {books.map((book, index) => {
              const mostCurrentEdition =
                book.published_works[book.published_works.length - 1];
              return (
                <Card
                  key={`${book.title}-${index}`}
                  className="flex flex-col gap-2"
                >
                  <CardHeader>
                    <CardTitle className="text-center pb-4">
                      {book.title}
                    </CardTitle>
                    <Image
                      src={mostCurrentEdition.cover_art_url}
                      alt={book.title}
                      width={250}
                      height={200}
                      className="mx-auto"
                    />
                  </CardHeader>
                  {/* <CardContent className="mt-auto border-t">
                    <CardDescription className="flex justify-center gap-4">
                      {book.authors.map((author) => {
                        return (
                          <Button asChild variant={"link"} key={author} className="flex-shrink-0">
                            <Link href={`/authors/${author}`}>{author}</Link>
                          </Button>
                        );
                      })}
                    </CardDescription>
                  </CardContent> */}
                </Card>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
