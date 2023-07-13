-- CreateTable
CREATE TABLE "authors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_authorsTobooks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_authorsTousers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_authorsTobooks_AB_unique" ON "_authorsTobooks"("A", "B");

-- CreateIndex
CREATE INDEX "_authorsTobooks_B_index" ON "_authorsTobooks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_authorsTousers_AB_unique" ON "_authorsTousers"("A", "B");

-- CreateIndex
CREATE INDEX "_authorsTousers_B_index" ON "_authorsTousers"("B");

-- AddForeignKey
ALTER TABLE "_authorsTobooks" ADD CONSTRAINT "_authorsTobooks_A_fkey" FOREIGN KEY ("A") REFERENCES "authors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_authorsTobooks" ADD CONSTRAINT "_authorsTobooks_B_fkey" FOREIGN KEY ("B") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_authorsTousers" ADD CONSTRAINT "_authorsTousers_A_fkey" FOREIGN KEY ("A") REFERENCES "authors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_authorsTousers" ADD CONSTRAINT "_authorsTousers_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
