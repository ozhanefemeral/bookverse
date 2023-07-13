import { AuthorWithBooks } from "@/app/types";
import prisma from "@/lib/prisma";

type AuthorPageParams = {
  slug: string;
};

export default async function AuthorPage({
  params,
}: {
  params: AuthorPageParams;
}) {
  const { slug } = params;

  const author = await prisma.authors.findUnique({
    where: {
      slug,
    },
    include: {
      books: true,
    },
  }) as AuthorWithBooks;

  return (
    <div>
      <h1 className="text-3xl font-bold uppercase">{author.name}</h1>

      <h2 className="text-xl font-bold">Books</h2>
      <ul>
        {author.books.map((book) => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
