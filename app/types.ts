import { Prisma } from "@prisma/client";

export type SearchResult = {
  total_results: number;
  total_pages: number;
  results: Book[];
};

export type Book = {
  subcategories: string[];
  page_count: number;
  title_search: string;
  copyright: number;
  title: string;
  subject_tags: string[];
  recommended_isbns: string[];
  published_works: PublishedWork[];
  series_name: string;
  min_age: number | null;
  book_type: string;
  authors: string[];
  categories: string[];
  language: string;
  summary: string;
  work_id: number;
  canonical_isbn: string;
};

type PublishedWork = {
  isbn: string;
  copyright: number;
  published_work_id: number;
  page_count: number | null;
  cover_art_url: string;
};
