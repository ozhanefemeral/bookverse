import BookSearch from "@/components/book-search";
import BookGrid from "@/components/book-grid";
import { SearchResult } from "../types";
import { apiRoute, fetchOptions, removeEmptyQueryParams } from "@/lib/utils";

export const dynamic='force-dynamic';

async function getBooks({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}): Promise<SearchResult> {
  const params = new URLSearchParams(
    removeEmptyQueryParams(searchParams)
  ).toString();
  const url = `${apiRoute}/api/search?${params}`
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
    <div className="p-8">
      <div className="pb-4">
        <BookSearch />
      </div>
      <hr />
      <BookGrid searchResults={searchResults} />
    </div>
  );
}
