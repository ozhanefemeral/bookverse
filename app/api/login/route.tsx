import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (email === "" || password === "") {
    return new NextResponse("Email or password cannot be empty", {
      status: 400,
    });
  }
  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    return new NextResponse("User not found", {
      status: 404,
    });
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return new NextResponse("Password is incorrect", {
      status: 401,
    });
  }

  return NextResponse.json(
    {
      message: "Logged in",
    },
    {
      status: 200,
    }
  );
}
