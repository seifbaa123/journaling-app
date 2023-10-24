/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Users" (
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
    CONSTRAINT "Journals_username_fkey" FOREIGN KEY ("username") REFERENCES "Users" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Journals" ("body", "coding", "date", "sport", "status", "title", "username") SELECT "body", "coding", "date", "sport", "status", "title", "username" FROM "Journals";
DROP TABLE "Journals";
ALTER TABLE "new_Journals" RENAME TO "Journals";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
