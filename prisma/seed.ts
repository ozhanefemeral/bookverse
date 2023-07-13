import prisma from '../lib/prisma'

async function main() {
  const response = await Promise.all([
    prisma.users.upsert({
      where: { email: 'rauchg@vercel.com' },
      update: {},
      create: {
        name: 'Guillermo Rauch',
        email: 'rauchg@vercel.com',
        image:
          'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg',
      },
    }),
    prisma.users.upsert({
      where: { email: 'lee@vercel.com' },
      update: {},
      create: {
        name: 'Lee Robinson',
        email: 'lee@vercel.com',
        image:
          'https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg',
      },
    }),
    prisma.users.upsert({
      where: { email: 'stey@vercel.com' },
      update: {},
      create: {
        name: 'Steven Tey',
        email: 'stey@vercel.com',
        image:
          'https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg',
      },
    }),
    prisma.authors.upsert({
      where: { slug: "jrr-tolkien" },
      update: {},
      create: {
        name: 'J.R.R. Tolkien',
        slug: 'jrr-tolkien',
        books: {
          create: [
            {
              title: 'The Hobbit',
              year: 1937,
              image: ""
            },
            {
              title: 'The Fellowship of the Ring',
              year: 1954,
              image: ""
            },
          ]
        },
        image: ""
      }
    }),
    prisma.authors.upsert({
      where: { slug: "cs-lewis" },
      update: {},
      create: {
        name: 'C.S. Lewis',
        slug: 'cs-lewis',
        books: {
          create: [
            {
              title: 'The Lion, the Witch and the Wardrobe',
              year: 1950,
              image: ""
            },
            {
              title: 'Prince Caspian',
              year: 1951,
              image: ""
            },
          ]
        },
        image: ""
      }
    }),
  ])
  console.log(response)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
