/*
  Warnings:

  - You are about to drop the column `penname` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_penname_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "penname";
