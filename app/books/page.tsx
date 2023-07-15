import BookSearch from "@/components/book-search";
import BookGrid from "@/components/book-grid";
import { SearchResult } from "../types";
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

export default async function BookSearchResults({
  params,
  searchParams,
}: {
  params: {};
  searchParams: { [key: string]: string };
}) {
  const searchResults = await getBooks({ searchParams });

  return (
    <div>
      <BookSearch />
      <hr />
      <BookGrid searchResults={searchResults} />
    </div>
  );
}
