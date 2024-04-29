/*
  Warnings:

  - You are about to drop the `Movement` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Movement";

-- CreateTable
CREATE TABLE "movement" (
    "id" TEXT NOT NULL,
    "initial_position" TEXT NOT NULL,
    "movements_to_do" TEXT NOT NULL,
    "movements_done" TEXT[],
    "final_position" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "movement_id_key" ON "movement"("id");
