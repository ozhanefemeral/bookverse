import Link from "next/link";
import { Author } from "../types";
import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";

export default async function Authors() {
  const authors = (await prisma?.authors.findMany({
    orderBy: {
      name: "asc",
    },
  })) as Author[];

  return (
    <div>
      <h1 className="text-3xl font-bold">Authors</h1>

      {authors.map((author: Author) => (
        <div key={author.slug}>
          <Link href={`/authors/${author.slug}`}>
            <Button variant="link">{author.name}</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
