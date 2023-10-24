/*
  Warnings:

  - Added the required column `username` to the `Journals` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Journals" (
    "date" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "sport" BOOLEAN NOT NULL,
    "coding" BOOLEAN NOT NULL,
    "username" TEXT NOT NULL,
    CONSTRAINT "Journals_username_fkey" FOREIGN KEY ("username") REFERENCES "User" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Journals" ("body", "coding", "date", "sport", "status", "title") SELECT "body", "coding", "date", "sport", "status", "title" FROM "Journals";
DROP TABLE "Journals";
ALTER TABLE "new_Journals" RENAME TO "Journals";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
