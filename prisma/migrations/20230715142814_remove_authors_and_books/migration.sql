/*
  Warnings:

  - You are about to drop the `_authorsTobooks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_authorsTousers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_booksTousers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `authors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `books` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_authorsTobooks" DROP CONSTRAINT "_authorsTobooks_A_fkey";

-- DropForeignKey
ALTER TABLE "_authorsTobooks" DROP CONSTRAINT "_authorsTobooks_B_fkey";

-- DropForeignKey
ALTER TABLE "_authorsTousers" DROP CONSTRAINT "_authorsTousers_A_fkey";

-- DropForeignKey
ALTER TABLE "_authorsTousers" DROP CONSTRAINT "_authorsTousers_B_fkey";

-- DropForeignKey
ALTER TABLE "_booksTousers" DROP CONSTRAINT "_booksTousers_A_fkey";

-- DropForeignKey
ALTER TABLE "_booksTousers" DROP CONSTRAINT "_booksTousers_B_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "favoriteAuthors" TEXT[],
ADD COLUMN     "favoriteBooks" INTEGER[];

-- DropTable
DROP TABLE "_authorsTobooks";

-- DropTable
DROP TABLE "_authorsTousers";

-- DropTable
DROP TABLE "_booksTousers";

-- DropTable
DROP TABLE "authors";

-- DropTable
DROP TABLE "books";
