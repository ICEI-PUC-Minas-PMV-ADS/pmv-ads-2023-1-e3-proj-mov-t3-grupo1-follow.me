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
