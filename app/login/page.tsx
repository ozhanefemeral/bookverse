"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loadingMessages } from "@/lib/utils";
import Image from "next/image";
import { FormEvent, useState } from "react";
import girlReadingSVG from "../../public/girl-reading-book.svg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!email || !password) return setError("Please fill in all fields");
    else if (isLoading) return;
    setIsLoading(true);
    setError("");
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    setTimeout(() => {
      if (!res.ok) {
        setError(res.statusText);
        setIsLoading(false);
      } else {
        window.location.href = "/";
      }
    }, 2000);
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="flex flex-col md:flex-row w-full items-stretch justify-center gap-8 md:px-8 px-4">
        <Image src={girlReadingSVG} width={400} height={400} alt="" />
        <Card className="flex flex-col w-full md:w-1/3">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 items-start">
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </CardContent>
          <CardFooter className="justify-self-end flex justify-between mt-auto gap-4">
            {isLoading && (
              <p className="animate-bounce text-primary">
                {loadingMessages.login}
              </p>
            )}
            {!isLoading && error && <p className="text-destructive">{error}</p>}
            <Button
              className="ml-auto"
              onClick={handleLogin}
              type="button"
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
