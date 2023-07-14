import { Prisma } from "@prisma/client";

const authorBasicFields = Prisma.validator<Prisma.authorsArgs>()({
  select: {
    name: true,
    image: true,
    slug: true,
    shortBio: true,
  },
});

const bookBasicFields = Prisma.validator<Prisma.booksArgs>()({
  select: {
    title: true,
    image: true,
    year: true,
  },
});

const authorWithBookFields = Prisma.validator<Prisma.authorsArgs>()({
  select: {
    ...authorBasicFields.select,
    books: {
      select: bookBasicFields.select,
    },
  },
});

export type Author = Prisma.authorsGetPayload<{
  select: typeof authorBasicFields.select;
}>;

export type Book = Prisma.booksGetPayload<{
  select: typeof bookBasicFields.select;
}>;

export type BookWithAuthor = Prisma.booksGetPayload<{
  select: {
    title: true;
    image: true;
    year: true;
    authors: {
      select: typeof authorBasicFields.select;
    };
  };
}>;

export type AuthorWithBooks = Prisma.authorsGetPayload<{
  select: typeof authorWithBookFields.select;
}>;