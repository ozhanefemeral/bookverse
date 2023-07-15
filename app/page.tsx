import BookSearch from "@/components/book-search";
import Link from "next/link";
import girlReadingSVG from "../public/girl-reading-book.svg";
import Image from "next/image";
export const preferredRegion = "home";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="relative h-screen flex p-4 flex-col items-center justify-center gap-4">
      <Image src={girlReadingSVG} width={300} height={300} alt="" />
      <h1 className="bg-gradient-to-br from-primary to-black bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl font-bold pb-8">
        Bookverse
      </h1>
      <p className="font-light text-black w-full max-w-lg text-center">
        Uncover the world of words at{" "}
        <Link
          href="/"
          className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
        >
          BookVerse
        </Link>
        {". "}- Where stories come alive!
      </p>
      <BookSearch />
    </main>
  );
}
