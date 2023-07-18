import BookSearch from "@/components/book-search";
import BookGrid from "@/components/book-grid";
import { Suspense } from "react";
import BookGridSkeleton from "@/components/book-grid/skeleton";

export const dynamic = "force-dynamic";

export default async function BookSearchResults({
  searchParams,
}: {
  params: {};
  searchParams: { [key: string]: string };
}) {
  return (
    <div className="p-8">
      <div className="pb-4 border-b">
        <BookSearch />
      </div>
      <Suspense fallback={<BookGridSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <BookGrid searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
