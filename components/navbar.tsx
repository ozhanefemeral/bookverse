"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  const path = usePathname();

  if (path === "/") {
    return <></>;
  }

  return (
    <div className="px-4 py-4 flex justify-between items-center border-b">
      <Button asChild variant="link">
        <Link href="/">
          <h1 className="text-3xl font-bold">Bookverse</h1>
        </Link>
      </Button>
    </div>
  );
}
