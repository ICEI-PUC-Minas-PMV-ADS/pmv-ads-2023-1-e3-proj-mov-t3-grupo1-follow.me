-- CreateTable
CREATE TABLE "logins" (
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "logins_username_key" ON "logins"("username");
