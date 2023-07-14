import BookSearch from "@/components/book-search";
import prisma from "@/lib/prisma";
import { BookWithAuthor } from "../types";
import BookGrid from "@/components/book-grid";

export default async function BookSearchResults({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string };
}) {
  const { book } = searchParams;
  const books = (await prisma.books.findMany({
    where: {
      title: { contains: book, mode: "insensitive" },
    },
    include: {
      authors: true,
    },
    orderBy: {
      title: "asc",
    },
  })) as BookWithAuthor[];

  return (
    <div>
      <BookSearch />
      <hr />
      {book && (
        <div className="py-4">
          Found {books.length} book{books.length > 1 ? "s" : ""} matching{" "}
          <span className="font-bold text-primary">{book}</span>.
        </div>
      )}

      <BookGrid books={books} />
    </div>
  );
}
