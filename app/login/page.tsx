"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if(!res.ok) return alert("Error logging in");

    const data = await res.json();
    if (data.error) {
      alert(data.error);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="flex w-screen h-screen flex-col justify-center items-center gap-4">
      <Input
        type="email"
        placeholder="Email"
        className="w-full md:w-auto"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        className="w-full md:w-auto"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin} type="button">
        Login
      </Button>
    </div>
  );
}
