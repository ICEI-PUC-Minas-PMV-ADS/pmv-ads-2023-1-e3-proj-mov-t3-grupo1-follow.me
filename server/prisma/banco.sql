-- CreateTable
CREATE TABLE "habits" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL
);

/*
  Warnings:

  - You are about to drop the `habits` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "habits";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "habits" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "days" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "day_habits" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_dia" TEXT NOT NULL,
    "id_atividade" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "habit_week_days" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_atividade" TEXT NOT NULL,
    "dia_semana" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "day_habits_key" ON "days"("date");

-- CreateIndex
CREATE UNIQUE INDEX "day_habits_id_days_id_habits_key" ON "day_habits"("id_days", "id_habits");

-- CreateIndex
CREATE UNIQUE INDEX "habit_week_days_id_habit_week_days_key" ON "habit_week_days"("id_habits", "day_habits");

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_day_habits" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_day" TEXT NOT NULL,
    "id_habits" TEXT NOT NULL,
    CONSTRAINT "day_habits_id_day_fkey" FOREIGN KEY ("id_day") REFERENCES "days" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "day_habits_id_habits_fkey" FOREIGN KEY ("id_habits") REFERENCES "habits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_day_habits" ("id", "id_habits", "id_day") SELECT "id", "id_habits", "id_day" FROM "day_habits";
DROP TABLE "day_habits";
ALTER TABLE "new_day_habits" RENAME TO "day_habits";
CREATE UNIQUE INDEX "day_habits_id_day_id_habits_key" ON "day_habits"("id_day", "id_habits");
CREATE TABLE "habit_week_days" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_habits" TEXT NOT NULL,
    "day_week" INTEGER NOT NULL,
    CONSTRAINT "habit_week_days_id_habits_fkey" FOREIGN KEY ("id_habits") REFERENCES "habits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_habit_week_days" ("dia_week", "id", "id_habits") SELECT "day_week", "id", "id_habits" FROM "habit_week_days";
DROP TABLE "habit_week_days";
ALTER TABLE "new_habit_week_days" RENAME TO "habit_week_days";
CREATE UNIQUE INDEX "habit_week_days_id_habits_day_week_key" ON "habit_week_days"("id_habits", "day_week");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

/*
  Warnings:

  - You are about to drop the column `created_at` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `habits` table. All the data in the column will be lost.
  - Added the required column `data_criacao` to the `habits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `habits` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_habits" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "data_criacao" DATETIME NOT NULL
);
INSERT INTO "new_habits" ("id") SELECT "id" FROM "habits";
DROP TABLE "habits";
ALTER TABLE "new_habits" RENAME TO "habits";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;






