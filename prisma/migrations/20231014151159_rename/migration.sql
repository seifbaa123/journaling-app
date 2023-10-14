/*
  Warnings:

  - You are about to drop the `Journal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Journal";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Journals" (
    "date" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "sport" BOOLEAN NOT NULL,
    "coding" BOOLEAN NOT NULL
);
