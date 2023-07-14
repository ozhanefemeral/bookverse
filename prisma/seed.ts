import prisma from "../lib/prisma";

async function main() {
  await prisma.authors.deleteMany({});
  await prisma.books.deleteMany({});
  await prisma.users.deleteMany({});

  const response = await Promise.all([
    prisma.users.upsert({
      where: { email: "rauchg@vercel.com" },
      update: {},
      create: {
        name: "Guillermo Rauch",
        email: "rauchg@vercel.com",
        image:
          "https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg",
      },
    }),
    prisma.users.upsert({
      where: { email: "lee@vercel.com" },
      update: {},
      create: {
        name: "Lee Robinson",
        email: "lee@vercel.com",
        image:
          "https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg",
      },
    }),
    prisma.users.upsert({
      where: { email: "stey@vercel.com" },
      update: {},
      create: {
        name: "Steven Tey",
        email: "stey@vercel.com",
        image:
          "https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg",
      },
    }),
    prisma.authors.upsert({
      where: { slug: "jrr-tolkien" },
      update: {},
      create: {
        name: "J.R.R. Tolkien",
        slug: "jrr-tolkien",
        books: {
          create: [
            {
              title: "The Hobbit",
              year: 1937,
              image: "",
            },
            {
              title: "The Fellowship of the Ring",
              year: 1954,
              image: "",
            },
            {
              title: "The Two Towers",
              year: 1954,
              image: "",
            },
            {
              title: "The Return of the King",
              year: 1955,
              image: "",
            },
            {
              title: "The Silmarillion",
              year: 1977,
              image: "",
            },
          ],
        },
        image: "",
        shortBio:
          "Master of high fantasy, creator of Middle-earth, and author of The Hobbit and The Lord of the Rings.",
      },
    }),
    prisma.authors.upsert({
      where: { slug: "jk-rowling" },
      update: {},
      create: {
        name: "J.K. Rowling",
        slug: "jk-rowling",
        books: {
          create: [
            {
              title: "Harry Potter and the Philosopher's Stone",
              year: 1997,
              image: "",
            },
            {
              title: "Harry Potter and the Chamber of Secrets",
              year: 1998,
              image: "",
            },
            {
              title: "Harry Potter and the Prisoner of Azkaban",
              year: 1999,
              image: "",
            },
            {
              title: "Harry Potter and the Goblet of Fire",
              year: 2000,
              image: "",
            },
            {
              title: "Harry Potter and the Order of the Phoenix",
              year: 2003,
              image: "",
            },
          ],
        },
        image: "",
        shortBio:
          "Magical storyteller and creator of the beloved Harry Potter series, capturing the imaginations of readers worldwide.",
      },
    }),
    prisma.authors.upsert({
      where: { slug: "cs-lewis" },
      update: {},
      create: {
        name: "C.S. Lewis",
        slug: "cs-lewis",
        books: {
          create: [
            {
              title: "The Lion, the Witch and the Wardrobe",
              year: 1950,
              image: "",
            },
            {
              title: "Prince Caspian",
              year: 1951,
              image: "",
            },
            {
              title: "The Voyage of the Dawn Treader",
              year: 1952,
              image: "",
            },
            {
              title: "The Silver Chair",
              year: 1953,
              image: "",
            },
            {
              title: "The Horse and His Boy",
              year: 1954,
              image: "",
            },
          ],
        },
        image: "",
        shortBio:
          "Gifted writer and creator of The Chronicles of Narnia, blending fantasy and Christian themes in captivating tales.",
      },
    }),
    prisma.authors.upsert({
      where: { slug: "george-orwell" },
      update: {},
      create: {
        name: "George Orwell",
        slug: "george-orwell",
        books: {
          create: [
            {
              title: "1984",
              year: 1949,
              image: "",
            },
            {
              title: "Animal Farm",
              year: 1945,
              image: "",
            },
            {
              title: "Burmese Days",
              year: 1934,
              image: "",
            },
            {
              title: "Keep the Aspidistra Flying",
              year: 1936,
              image: "",
            },
            {
              title: "Down and Out in Paris and London",
              year: 1933,
              image: "",
            },
          ],
        },
        image: "",
        shortBio:
          "English critic known for his lucid prose, sharp social criticism, and opposition to totalitarianism",
      },
    }),
    prisma.authors.upsert({
      where: { slug: "george-r-r-martin" },
      update: {},
      create: {
        name: "George R.R. Martin",
        slug: "george-r-r-martin",
        books: {
          create: [
            {
              title: "A Game of Thrones",
              year: 1996,
              image: "",
            },
            {
              title: "A Clash of Kings",
              year: 1998,
              image: "",
            },
            {
              title: "A Storm of Swords",
              year: 2000,
              image: "",
            },
            {
              title: "A Feast for Crows",
              year: 2005,
              image: "",
            },
            {
              title: "A Dance with Dragons",
              year: 2011,
              image: "",
            },
            {
              title: "The Winds of Winter",
              year: 2022,
              image: "",
            },
            {
              title: "A Dream of Spring",
              year: 2023,
              image: "",
            },
          ],
        },
        image: "",
        shortBio:
          "Master of intricate storytelling, warring realms, and mind behind the series 'A Song of Ice and Fire.'",
      },
    }),
    prisma.authors.upsert({
      where: { slug: "agatha-christie" },
      update: {},
      create: {
        name: "Agatha Christie",
        slug: "agatha-christie",
        books: {
          create: [
            {
              title: "Murder on the Orient Express",
              year: 1934,
              image: "",
            },
            {
              title: "And Then There Were None",
              year: 1939,
              image: "",
            },
            {
              title: "The Murder of Roger Ackroyd",
              year: 1926,
              image: "",
            },
            {
              title: "Death on the Nile",
              year: 1937,
              image: "",
            },
            {
              title: "The ABC Murders",
              year: 1936,
              image: "",
            },
            {
              title: "Five Little Pigs",
              year: 1942,
              image: "",
            },
            {
              title: "The Mysterious Affair at Styles",
              year: 1920,
              image: "",
            },
          ],
        },
        image: "",
        shortBio:
          "Celebrated as the 'Queen of Crime' for her intricate plots and memorable characters",
      },
    }),
    prisma.authors.upsert({
      where: { slug: "stephen-king" },
      update: {},
      create: {
        name: "Stephen King",
        slug: "stephen-king",
        books: {
          create: [
            {
              title: "Carrie",
              year: 1974,
              image: "",
            },
            {
              title: "The Shining",
              year: 1977,
              image: "",
            },
            {
              title: "It",
              year: 1986,
              image: "",
            },
            {
              title: "The Stand",
              year: 1978,
              image: "",
            },
            {
              title: "Misery",
              year: 1987,
              image: "",
            },
            {
              title: "Pet Sematary",
              year: 1983,
              image: "",
            },
            {
              title: "The Green Mile",
              year: 1996,
              image: "",
            },
          ],
        },
        image: "",
        shortBio:
          "Master of horror and suspense, captivating readers with his gripping storytelling",
      },
    }),
    prisma.authors.upsert({
      where: { slug: "gabriel-garcia-marquez" },
      update: {},
      create: {
        name: "Gabriel García Márquez",
        slug: "gabriel-garcia-marquez",
        books: {
          create: [
            {
              title: "One Hundred Years of Solitude",
              year: 1967,
              image: "",
            },
            {
              title: "Love in the Time of Cholera",
              year: 1985,
              image: "",
            },
            {
              title: "Chronicle of a Death Foretold",
              year: 1981,
              image: "",
            },
            {
              title: "The Autumn of the Patriarch",
              year: 1975,
              image: "",
            },
            {
              title: "Of Love and Other Demons",
              year: 1994,
              image: "",
            },
            {
              title: "The General in His Labyrinth",
              year: 1989,
              image: "",
            },
            {
              title: "Leaf Storm",
              year: 1955,
              image: "",
            },
          ],
        },
        image: "",
        shortBio:
          "Master of magical realism, enchanting readers with his lyrical prose and captivating tales.",
      },
    }),
    prisma.authors.upsert({
      where: { slug: "jane-austen" },
      update: {},
      create: {
        name: "Jane Austen",
        slug: "jane-austen",
        books: {
          create: [
            {
              title: "Pride and Prejudice",
              year: 1813,
              image: "",
            },
            {
              title: "Sense and Sensibility",
              year: 1811,
              image: "",
            },
            {
              title: "Emma",
              year: 1815,
              image: "",
            },
            {
              title: "Persuasion",
              year: 1817,
              image: "",
            },
            {
              title: "Mansfield Park",
              year: 1814,
              image: "",
            },
            {
              title: "Northanger Abbey",
              year: 1818,
              image: "",
            },
            {
              title: "Lady Susan",
              year: 1871,
              image: "",
            },
          ],
        },
        image: "",
        shortBio:
          "Master of wit and social commentary, delighting readers with exploring love, society, and romance.",
      },
    }),
    prisma.authors.upsert({
      where: { slug: "ernest-hemingway" },
      update: {},
      create: {
        name: "Ernest Hemingway",
        slug: "ernest-hemingway",
        books: {
          create: [
            {
              title: "The Old Man and the Sea",
              year: 1952,
              image: "",
            },
            {
              title: "A Farewell to Arms",
              year: 1929,
              image: "",
            },
            {
              title: "For Whom the Bell Tolls",
              year: 1940,
              image: "",
            },
            {
              title: "The Sun Also Rises",
              year: 1926,
              image: "",
            },
            {
              title: "To Have and Have Not",
              year: 1937,
              image: "",
            },
            {
              title: "Death in the Afternoon",
              year: 1932,
              image: "",
            },
            {
              title: "The Snows of Kilimanjaro",
              year: 1936,
              image: "",
            },
          ],
        },
        image: "",
        shortBio:
          "Legendary writer known for his sparse and iconic novels such as 'The Old Man and the Sea",
      },
    }),
    prisma.authors.upsert({
      where: { slug: "mark-twain" },
      update: {},
      create: {
        name: "Mark Twain",
        slug: "mark-twain",
        books: {
          create: [
            {
              title: "The Adventures of Tom Sawyer",
              year: 1876,
              image: "",
            },
            {
              title: "Adventures of Huckleberry Finn",
              year: 1884,
              image: "",
            },
            {
              title: "The Prince and the Pauper",
              year: 1881,
              image: "",
            },
            {
              title: "A Connecticut Yankee in King Arthur's Court",
              year: 1889,
              image: "",
            },
            {
              title: "The Innocents Abroad",
              year: 1869,
              image: "",
            },
            {
              title: "Life on the Mississippi",
              year: 1883,
              image: "",
            },
            {
              title: "Pudd'nhead Wilson",
              year: 1894,
              image: "",
            },
          ],
        },
        image: "",
        shortBio:
          "Renowned humorist and storyteller whose timeless works, including 'The Adventures of Tom Sawyer'.",
      },
    }),
    prisma.authors.upsert({
      where: { slug: "leo-tolstoy" },
      update: {},
      create: {
        name: "Leo Tolstoy",
        slug: "leo-tolstoy",
        books: {
          create: [
            {
              title: "War and Peace",
              year: 1869,
              image: "",
            },
            {
              title: "Anna Karenina",
              year: 1877,
              image: "",
            },
            {
              title: "The Death of Ivan Ilyich",
              year: 1886,
              image: "",
            },
            {
              title: "Resurrection",
              year: 1899,
              image: "",
            },
            {
              title: "The Kreutzer Sonata",
              year: 1889,
              image: "",
            },
            {
              title: "Childhood",
              year: 1852,
              image: "",
            },
            {
              title: "The Cossacks",
              year: 1863,
              image: "",
            },
          ],
        },
        image: "",
        shortBio:
          "Master of Russian literature, known for epic novels like 'War and Peace' and 'Anna Karenina'.",
      },
    }),
    prisma.authors.upsert({
      where: { slug: "virginia-woolf" },
      update: {},
      create: {
        name: "Virginia Woolf",
        slug: "virginia-woolf",
        books: {
          create: [
            {
              title: "Mrs Dalloway",
              year: 1925,
              image: "",
            },
            {
              title: "To the Lighthouse",
              year: 1927,
              image: "",
            },
            {
              title: "Orlando",
              year: 1928,
              image: "",
            },
            {
              title: "A Room of One's Own",
              year: 1929,
              image: "",
            },
            {
              title: "The Waves",
              year: 1931,
              image: "",
            },
            {
              title: "Jacob's Room",
              year: 1922,
              image: "",
            },
            {
              title: "Night and Day",
              year: 1919,
              image: "",
            },
          ],
        },
        image: "",
        shortBio:
          "Influential modernist writer exploring the depths of consciousness and identity",
      },
    }),
    prisma.authors.upsert({
      where: { slug: "oscar-wilde" },
      update: {},
      create: {
        name: "Oscar Wilde",
        slug: "oscar-wilde",
        books: {
          create: [
            {
              title: "The Picture of Dorian Gray",
              year: 1890,
              image: "",
            },
            {
              title: "The Importance of Being Earnest",
              year: 1895,
              image: "",
            },
            {
              title: "Lady Windermere's Fan",
              year: 1892,
              image: "",
            },
            {
              title: "An Ideal Husband",
              year: 1895,
              image: "",
            },
            {
              title: "Salome",
              year: 1891,
              image: "",
            },
            {
              title: "A Woman of No Importance",
              year: 1893,
              image: "",
            },
            {
              title: "De Profundis",
              year: 1905,
              image: "",
            },
          ],
        },
        image: "",
        shortBio:
          "Iconic Irish playwright and novelist known for his wit and social commentary, enchanting readers.",
      },
    }),
    prisma.authors.upsert({
      where: { slug: "harper-lee" },
      update: {},
      create: {
        name: "Harper Lee",
        slug: "harper-lee",
        books: {
          create: [
            {
              title: "To Kill a Mockingbird",
              year: 1960,
              image: "",
            },
            {
              title: "Go Set a Watchman",
              year: 2015,
              image: "",
            },
            {
              title: "The Mockingbird Next Door: Life with Harper Lee",
              year: 2014,
              image: "",
            },
            {
              title: "Christmas to Me",
              year: 2017,
              image: "",
            },
            {
              title: "When Children Discover America",
              year: 1953,
              image: "",
            },
            {
              title: "Atticus Finch: The Biography",
              year: 2018,
              image: "",
            },
            {
              title:
                "Scout, Atticus, and Boo: A Celebration of Fifty Years of To Kill a Mockingbird",
              year: 2010,
              image: "",
            },
          ],
        },
        image: "",
        shortBio:
          "Acclaimed novelist celebrated for her powerful exploration of racial injustice and moral integrity.",
      },
    }),
    prisma.authors.upsert({
      where: { slug: "fyodor-dostoevsky" },
      update: {},
      create: {
        name: "Fyodor Dostoevsky",
        slug: "fyodor-dostoevsky",
        books: {
          create: [
            {
              title: "Crime and Punishment",
              year: 1866,
              image: "",
            },
            {
              title: "The Brothers Karamazov",
              year: 1880,
              image: "",
            },
            {
              title: "Notes from Underground",
              year: 1864,
              image: "",
            },
            {
              title: "The Idiot",
              year: 1869,
              image: "",
            },
            {
              title: "Demons",
              year: 1872,
              image: "",
            },
            {
              title: "The Gambler",
              year: 1867,
              image: "",
            },
            {
              title: "The Possessed",
              year: 1872,
              image: "",
            },
          ],
        },
        image: "",
        shortBio:
          "Legendary Russian novelist exploring the depths of human psychology and societal issues.",
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
