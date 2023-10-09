-- CreateTable
CREATE TABLE "Journal" (
    "date" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "sport" BOOLEAN NOT NULL,
    "coding" BOOLEAN NOT NULL
);
