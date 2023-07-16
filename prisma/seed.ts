import prisma from "../lib/prisma";

async function main() {
  const response = await Promise.all([
    prisma.users.upsert({
      where: { email: "ozzy@example.com" },
      update: {},
      create: {
        name: "Ozhan Efe",
        email: "ozzy@example.com",
        image:
          "https://pbs.twimg.com/profile_images/1678693347005722626/yQENjtcV_400x400.jpg",
      },
    }),
  ]);
  // console.log(response);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
