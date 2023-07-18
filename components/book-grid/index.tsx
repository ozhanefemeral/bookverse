import { Card, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { SearchResult } from "@/app/types";
import PaginationController from "../pagination-controller";
import { apiRoute, fetchOptions, removeEmptyQueryParams } from "@/lib/utils";

async function getBooks({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}): Promise<SearchResult> {
  const params = new URLSearchParams(
    removeEmptyQueryParams(searchParams)
  ).toString();
  const url = `${apiRoute}/api/search?${params}`;
  const response = await fetch(url, fetchOptions);
  const results = await response.json();

  return results;
}

export default async function BookGrid({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const {
    results: books,
    total_results: totalResults,
    total_pages: totalPages,
  } = await getBooks({ searchParams });

  const isEmpty = !books || books.length === 0;

  return (
    <div>
      {isEmpty && (
        <div className="flex flex-col items-center justify-center py-4">
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
          <div className="flex flex-wrap justify-between items-center md:gap-4">
            <div className="w-full md:w-fit text-center pt-4 md:pt-0 text-lg">
              Found
              <span className="font-bold text-primary">
                &nbsp;{totalResults}&nbsp;
              </span>
              book{totalResults > 1 ? "s" : ""}
            </div>
            <div className="w-full md:w-fit py-4">
              <PaginationController total={totalPages} />
            </div>
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
          <div className="flex justify-center md:justify-end pt-4">
            <PaginationController total={totalPages} />
          </div>
        </>
      )}
    </div>
  );
}
