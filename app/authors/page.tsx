import Link from "next/link";
import { Author } from "../types";
import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default async function Authors() {
  const authors = (await prisma?.authors.findMany({
    orderBy: {
      name: "asc",
    },
  })) as Author[];

  return (
    <div>
      <h1 className="text-3xl font-bold">Authors</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {authors.map((author: Author) => (
            <Card key={author.slug}>
              <CardHeader>
                <Image src={author.image} alt={author.name} className="w-full" />
                <CardTitle>{author.name}</CardTitle>
                <CardDescription>{author.shortBio}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
        ))}
      </div>
    </div>
  );
}
