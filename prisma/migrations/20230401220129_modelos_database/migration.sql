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
