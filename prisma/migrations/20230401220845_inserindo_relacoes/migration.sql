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
