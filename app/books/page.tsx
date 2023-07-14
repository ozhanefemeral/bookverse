import BookSearch from "@/components/book-search";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/lib/prisma";
import Image from "next/image";
import { BookWithAuthor } from "../types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <Card key={book.title} className="flex flex-col gap-2">
            <CardHeader>
              <Image src={book.image} alt={book.title} className="w-full" />
              <CardTitle>{book.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-right">
                {book.authors.map((author) => (
                  <Button asChild variant={"link"}>
                    <Link href={`/authors/${author.slug}`}>{author.name}</Link>
                  </Button>
                ))}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
