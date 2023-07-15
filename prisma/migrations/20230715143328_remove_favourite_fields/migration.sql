/*
  Warnings:

  - You are about to drop the column `favoriteAuthors` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `favoriteBooks` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "favoriteAuthors",
DROP COLUMN "favoriteBooks";
