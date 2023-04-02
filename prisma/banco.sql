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
CREATE TABLE "atividades" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "dias" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "dia_atividades" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_dia" TEXT NOT NULL,
    "id_atividade" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "dia_semana_atividade" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_atividade" TEXT NOT NULL,
    "dia_semana" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "dias_data_key" ON "dias"("data");

-- CreateIndex
CREATE UNIQUE INDEX "dia_atividades_id_dia_id_atividade_key" ON "dia_atividades"("id_dia", "id_atividade");

-- CreateIndex
CREATE UNIQUE INDEX "dia_semana_atividade_id_atividade_dia_semana_key" ON "dia_semana_atividade"("id_atividade", "dia_semana");

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_dia_atividades" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_dia" TEXT NOT NULL,
    "id_atividade" TEXT NOT NULL,
    CONSTRAINT "dia_atividades_id_dia_fkey" FOREIGN KEY ("id_dia") REFERENCES "dias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "dia_atividades_id_atividade_fkey" FOREIGN KEY ("id_atividade") REFERENCES "atividades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_dia_atividades" ("id", "id_atividade", "id_dia") SELECT "id", "id_atividade", "id_dia" FROM "dia_atividades";
DROP TABLE "dia_atividades";
ALTER TABLE "new_dia_atividades" RENAME TO "dia_atividades";
CREATE UNIQUE INDEX "dia_atividades_id_dia_id_atividade_key" ON "dia_atividades"("id_dia", "id_atividade");
CREATE TABLE "new_dia_semana_atividade" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_atividade" TEXT NOT NULL,
    "dia_semana" INTEGER NOT NULL,
    CONSTRAINT "dia_semana_atividade_id_atividade_fkey" FOREIGN KEY ("id_atividade") REFERENCES "atividades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_dia_semana_atividade" ("dia_semana", "id", "id_atividade") SELECT "dia_semana", "id", "id_atividade" FROM "dia_semana_atividade";
DROP TABLE "dia_semana_atividade";
ALTER TABLE "new_dia_semana_atividade" RENAME TO "dia_semana_atividade";
CREATE UNIQUE INDEX "dia_semana_atividade_id_atividade_dia_semana_key" ON "dia_semana_atividade"("id_atividade", "dia_semana");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

/*
  Warnings:

  - You are about to drop the column `created_at` on the `atividades` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `atividades` table. All the data in the column will be lost.
  - Added the required column `data_criacao` to the `atividades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `atividades` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_atividades" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "data_criacao" DATETIME NOT NULL
);
INSERT INTO "new_atividades" ("id") SELECT "id" FROM "atividades";
DROP TABLE "atividades";
ALTER TABLE "new_atividades" RENAME TO "atividades";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;






