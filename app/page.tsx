import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
export const preferredRegion = "home";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-primary to-black bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl font-bold">
        Bookverse
      </h1>
      <p className="font-light text-black w-full max-w-lg text-center mt-6">
        Uncover the world of words at{" "}
        <Link
          href="/"
          className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
        >
          BookVerse
        </Link>
        {". "}- Where stories come alive!
      </p>
      <Link href="/authors" className={buttonVariants({ variant: "link" })}>
          All Authors
      </Link>
    </main>
  );
}
